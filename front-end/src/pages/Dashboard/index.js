import React, { Component, Fragment } from 'react'
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
import { Paragraph } from '../../objects/Paragraphs'
import ItemInfo from '../../objects/ItemInfo'

import StyledDashboard from './styles'

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
          <StyledDashboard>
            <header>
              <hgroup>
                <TitleMain>Ruliana & Diogo</TitleMain>
                <SubTitleMain>painel de controle</SubTitleMain>
              </hgroup>
            </header>
            {(messages && billets && deposits && rsvps && users && (
              <Fragment>
                <div className="dashboard-summary">
                  <TitleInternal>Resumo</TitleInternal>
                  <Paragraph>Aqui estão os resumos das interações realizadas com o site.</Paragraph>
                  <Summary
                    messages={messages}
                    billets={billets}
                    deposits={deposits}
                    rsvps={rsvps}
                    users={users}
                  />
                </div>
                <div className="dashboard-options">
                  <TitleInternal>Opções</TitleInternal>
                  <Paragraph>Escolha uma opção para ver os detalhes!</Paragraph>
                  <div className="dashboard-options-items">
                    <ItemInfo
                      src="/assets/images/red-info-accommodation-icon.svg"
                      onClick={() => this.changeRoute('messages')}
                    >
                      Mensagens
                    </ItemInfo>
                    <ItemInfo
                      src="/assets/images/red-info-accommodation-icon.svg"
                      onClick={() => this.changeRoute('billets')}
                    >
                      Boletos
                    </ItemInfo>
                    <ItemInfo
                      src="/assets/images/red-info-accommodation-icon.svg"
                      onClick={() => this.changeRoute('deposits')}
                    >
                      Depósitos
                    </ItemInfo>
                    <ItemInfo
                      src="/assets/images/red-info-accommodation-icon.svg"
                      onClick={() => this.changeRoute('rsvps')}
                    >
                      Presenças
                    </ItemInfo>
                  </div>
                </div>
                <div className="dashboard-internal">
                  <TitleInternal>Detalhes</TitleInternal>
                  <div className="dashboard-internal-routes">
                    <Route
                      exact
                      path="/dashboard"
                      render={() => (
                        <Paragraph>Selecione uma opção para ver os detalhes.</Paragraph>
                      )}
                    />
                    <Route
                      exact
                      path="/dashboard/messages"
                      render={() => <ListMessage messages={messages} />}
                    />
                    <Route
                      exact
                      path="/dashboard/billets"
                      render={() => <ListBillet billets={billets} />}
                    />
                    <Route
                      exact
                      path="/dashboard/deposits"
                      render={() => <ListDeposit deposits={deposits} />}
                    />
                    <Route
                      exact
                      path="/dashboard/rsvps"
                      render={() => <ListRsvp rsvps={rsvps} />}
                    />
                  </div>
                </div>
                <Button onClick={() => this.logout()}>Sair</Button>
              </Fragment>
            )) || <Paragraph>Carregando...</Paragraph>}
          </StyledDashboard>
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
