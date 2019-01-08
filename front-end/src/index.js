import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from './router'
import store from './store'
import * as serviceWorker from './serviceWorker'

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root'),
  )
  serviceWorker.register()
})
