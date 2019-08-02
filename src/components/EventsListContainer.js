import React from 'react'
import {loadEvents} from '../actions/events'
import {connect} from 'react-redux'
import EventsList from './EventsList'

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    console.log('EventsListContainer this.props.events test:', this.props.events)
    return <EventsList events={this.props.events} />
  }
}

const mapStateToProps = state => {
    console.log('state test:', state)
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, {loadEvents})(EventsListContainer)