import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/address' component={Address} />
      </Router>
    )
  }
}

const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 96 Szyszków.</h1>

export default App
