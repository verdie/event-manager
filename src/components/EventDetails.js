import React, {Component} from 'react'

export default function EventDetails(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <i>{props.date}</i>
            <p>{props.description}</p>
            <button type="submit" onClick={()=>{props.onClick(props.id)}}>delete</button> 
        </div>
    )
}