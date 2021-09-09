import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Login from './components/Login';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              {this.props.auth0.isAuthenticated ? <Feed id="feed"/> : <div id="loginPage"><Login /></div>}
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
