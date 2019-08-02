import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, updateEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  onClick=(id)=>{
    this.props.deleteEvent(id)
    
  }

  render() {
      console.log('EVENTS:', this.props.events)
    return <EventDetails {...this.props.events} onClick={this.onClick}/>
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvent,deleteEvent})(EventDetailsContainer)