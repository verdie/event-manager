import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class EventsList extends Component {
    render() {
        console.log('this.props.events test:', this.props.events)
        return (
            <div>
                { !this.props.events 
                    ? 'Loading...'
                    : <ul>
                        { this.props.events.map(event => 
                            <li key={event}>
                                <Link to={ `/events/:id` }>
                                    {event}
                                </Link>
                            </li>)
                        }
                    </ul>
                }
                
            </div>
        )
    }
}