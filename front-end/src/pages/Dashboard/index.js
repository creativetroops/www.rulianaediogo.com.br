import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { compose, bindActionCreators } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Creators as AuthCreators } from '../../store/ducks/auth'

import Summary from '../../components/Dashboard/Summary'
import ListMessage from '../../components/Dashboard/Lists/ListMessage'
import ListBillet from '../../components/Dashboard/Lists/ListBillet'
import ListDeposit from '../../components/Dashboard/Lists/ListDeposit'
import ListRsvp from '../../components/Dashboard/Lists/ListRsvp'

import { Button } from '../../objects/Button'
import { Container, Section } from '../../objects/Containers'
import { TitleMain, SubTitleMain, TitleInternal } from '../../objects/Titles'

class Dashboard extends Component {
  state = {
    path: '',
  }

  logout = () => {
    this.props.authActions.logout()
  }

  changeRoute = (path) => {
    const pathDash = `/dashboard/${path}`
    if (pathDash !== this.state.path) {
      this.setState({ path: pathDash })
      this.props.history.push(pathDash)
    }
  }

  componentDidMount() {
    this.setState({ path: this.props.history.location.pathname })
  }

  render() {
    const {
      auth, messages, billets, deposits, rsvps, users,
    } = this.props
    if (!auth.uid) return <Redirect to="/login" />
    return (
      <Container>
        <Section>
          <hgroup>
            <TitleMain>Ruliana & Diogo</TitleMain>
            <SubTitleMain>painel de controle</SubTitleMain>
          </hgroup>
          <TitleInternal>Opções</TitleInternal>
          <Button onClick={() => this.changeRoute('messages')}>Mensagens</Button>
          <Button onClick={() => this.changeRoute('billets')}>Boletos</Button>
          <Button onClick={() => this.changeRoute('deposits')}>Depósitos</Button>
          <Button onClick={() => this.changeRoute('rsvps')}>Confirmações de Presença</Button>
          <Button onClick={() => this.logout()}>Sair</Button>
          <TitleInternal>Resumo</TitleInternal>
          {(messages && billets && deposits && rsvps && users && (
            <Summary
              messages={messages}
              billets={billets}
              deposits={deposits}
              rsvps={rsvps}
              users={users}
            />
          )) || <h2>Carregando</h2>}
          <TitleInternal>Detalhes</TitleInternal>
          <Route
            exact
            path="/dashboard"
            render={() => <h1>Selecione uma opção para ver seus detalhes.</h1>}
          />
          <Route
            exact
            path="/dashboard/messages"
            render={() => <ListMessage messages={messages} />}
          />
          <Route exact path="/dashboard/billets" render={() => <ListBillet billets={billets} />} />
          <Route
            exact
            path="/dashboard/deposits"
            render={() => <ListDeposit deposits={deposits} />}
          />
          <Route exact path="/dashboard/rsvps" render={() => <ListRsvp rsvps={rsvps} />} />
        </Section>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.firestore.ordered.messages,
  rsvps: state.firestore.ordered.rsvps,
  billets: state.firestore.ordered.billets,
  deposits: state.firestore.ordered.deposits,
  users: state.firestore.ordered.users,
  auth: state.firebase.auth,
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(AuthCreators, dispatch),
})

export default withRouter(
  compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
    firestoreConnect([
      { collection: 'messages', orderBy: [['createdAt', 'desc']] },
      { collection: 'rsvps', orderBy: [['createdAt', 'desc']] },
      { collection: 'billets', orderBy: [['createdAt', 'desc']] },
      { collection: 'deposits', orderBy: [['createdAt', 'desc']] },
      { collection: 'users', orderBy: [['createdAt', 'desc']] },
    ]),
  )(Dashboard),
)
