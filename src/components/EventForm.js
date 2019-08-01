import React, {Component} from 'react'

export default class EventForm extends Component{
    render(){
        return <div className="add-event">
        <form onSubmit={this.onSubmit}>
        <label>
            Name: 
            <input type="text" value={this.state.name} onChange={this.onChange}/>
        </label>
        <label>
            Date: 
            <input type="text" value={this.state.date} onChange={this.onChange}/>
        </label>
        <label>
            Description: 
            <input type="text" value={this.state.description} onChange={this.onChange}/>
        </label>
            <button type="submit">add event</button>
        </form>
        </div>
    }
}