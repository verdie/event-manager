import React, {Component} from 'react'

export default class EventForm extends Component{
    render(){
        return <div className="add-event">
        <form onSubmit={this.props.onSubmit}>
        <label>
            Name: 
            <input type="text" value={this.props.name} name='name'onChange={this.props.onChange}/>
        </label>
        <label>
            Date: 
            <input type="text" value={this.props.date} name='date' onChange={this.props.onChange}/>
        </label>
        <label>
            Description: 
            <input type="text" value={this.props.description} name='description' onChange={this.props.onChange}/>
        </label>
            <button type="submit">add event</button>
        </form>
        </div>
    }
}