import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import App from './components/app';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user){
    browserHistory.push('/app');
    const { email } = user;
    store.dispatch(logUser(email));
  } else {
    browserHistory.replace('/sign_in');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/sign_in" component={SignIn} />
      <Route path="/sign_up" component={SignUp} />
    </Router>
  </Provider>, document.getElementById('root')
)
