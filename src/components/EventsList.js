import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class EventsList extends Component {
    state = null
    

    componentDidMount() {
    }

    render() {
    return (
      <div>
        { this.state.events === null ? 'Loading...' :<ul>
            { this.state.events.map(event => 
            <li key={event}>
                <Link to={ `/events/:id` }>{event}</Link>
            </li>) }
        </ul> }
        
      </div>
    )
  }
}