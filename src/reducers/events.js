import {EVENTS_FETCHED} from '../actions/events'

export default (state = null, action = {}) => {
    switch(action.type){
    case EVENTS_FETCHED:
        return action.events
    default: return state
    }   
}