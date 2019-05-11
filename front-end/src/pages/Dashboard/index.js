import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import Summary from '../../components/Dashboard/Summary'
import ListMessage from '../../components/Dashboard/Lists/ListMessage'
import ListBillet from '../../components/Dashboard/Lists/ListBillet'
import ListDeposit from '../../components/Dashboard/Lists/ListDeposit'
import ListRsvp from '../../components/Dashboard/Lists/ListRsvp'
import ListUser from '../../components/Dashboard/Lists/ListUser'

import { Button } from '../../objects/Button'

class Dashboard extends Component {
  state = {
    path: '',
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
      <div className="container">
        <h1>Painel de Controle</h1>
        {(messages && billets && deposits && rsvps && users && (
          <Summary
            messages={messages}
            billets={billets}
            deposits={deposits}
            rsvps={rsvps}
            users={users}
          />
        )) || <h2>Carregando</h2>}
        <h2>Detalhes</h2>
        <Button onClick={() => this.changeRoute('messages')}>Mensagens</Button>
        <Button onClick={() => this.changeRoute('billets')}>Boletos</Button>
        <Button onClick={() => this.changeRoute('deposits')}>Depósitos</Button>
        <Button onClick={() => this.changeRoute('rsvps')}>Confirmações de Presença</Button>
        <Button onClick={() => this.changeRoute('users')}>Usuários</Button>
        <h2>Controles</h2>
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
        <Route exact path="/dashboard/users" render={() => <ListUser users={users} />} />
      </div>
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

export default withRouter(
  compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'messages', orderBy: [['createdAt', 'desc']] },
      { collection: 'rsvps', orderBy: [['createdAt', 'desc']] },
      { collection: 'billets', orderBy: [['createdAt', 'desc']] },
      { collection: 'deposits', orderBy: [['createdAt', 'desc']] },
      { collection: 'users', orderBy: [['createdAt', 'desc']] },
    ]),
  )(Dashboard),
)
