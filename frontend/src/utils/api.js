import {requestCategories, receiveCategories } from '../actions'
const endpoint = 'http://localhost:3001'
const headers = { headers: { 'Authorization': 'whatever-you-want' },credentials: 'include' }

export function fetchCategories () {
  return dispatch => {
    const url = `${endpoint}/categories`
    console.log('fetching from url', url)
    dispatch(requestCategories())
    fetch(url, headers)
      .then( (res) => (res.text()))
      .then((data) => {
        console.log(data)
        dispatch(receiveCategories(JSON.parse(data)))
      }
    )
  }
}

export function fetchPosts () {
  const url = `${endpoint}/posts`
  console.log('fetching from url', url)
  fetch(url, headers)
    .then((res) => { return(res.text()) })
    .then((data) => {
      console.log(data)
      //this.setState({backend:data})
    }
  );
}
