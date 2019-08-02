import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import EventsListContainer from './components/EventsListContainer';
import CreateEventFormContainer from './components/CreateEventFormContainer';
import EventDetailsContainer from './components/EventDetailsContainer';

class App extends Component {
  render() {
    console.log(1)
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventsListContainer} />
          <Route path="/" exact component={CreateEventFormContainer} />
          <Route path="/event/:id" component={EventDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App