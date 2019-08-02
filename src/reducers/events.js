import {EVENTS_FETCHED} from '../actions/events'
import {EVENT_CREATE_SUCCESS}  from '../actions/events'
import {EVENT_FETCHED} from '../actions/events'
import {EVENT_DELETE_SUCCESS} from '../actions/events'

export default (state = null, action = {}) => {
    switch(action.type){
    case EVENTS_FETCHED:
        return action.events
    case EVENT_CREATE_SUCCESS:
            return [...state,action.events]
    case EVENT_FETCHED:
        return action.events
    case EVENT_DELETE_SUCCESS:
        console.log('MY STATE:',state)
        if (state){
            return state.filter((item) => item.id === action.id)
        }else{
            return state
            }
    default: return state
    }   
}