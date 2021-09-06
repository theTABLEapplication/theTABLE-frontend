import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

import Header from './Header';
import Checkin from './Checkin';
import MyMap from './MyMap';
import Profile from './Profile';
import LoginButton from './LoginButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <Feed /> : <LoginButton />}
            </Route>
            <Route path="/checkin" component={Checkin} />
            <Route path="/mymap" component={MyMap} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
