import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'
export const EVENT_FETCHED = 'EVENT_FETCHEDS'
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return

  const url = `${baseUrl}/event`
  console.log('url test:', url)
  // a GET /events request
  request(url)
    .then(response => {
        console.log('response test:', response.body)
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}



const eventCreateSuccess = events => ({
  type: EVENT_CREATE_SUCCESS,
  events
})

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

const loadEventSuccess = events => ({
    type: EVENT_FETCHED,
    events
  })
  
  export const loadEvent = (id) => dispatch => {
    request
      .get(`${baseUrl}/event/${id}`)
      .send()
      .then(response => {
        dispatch(loadEventSuccess(response.body))
      })
      .catch(console.error)
  }

  const deleteEventSuccess = events=>({
    type: EVENT_DELETE_SUCCESS,
    events
  })

  export const deleteEvent = (id) =>dispatch=>{
    request
      .delete(`${baseUrl}/event/${id}`)
      .send()
      .then(response =>{
        dispatch(deleteEventSuccess(response.body.id))
      })
      .catch(console.error)
  }