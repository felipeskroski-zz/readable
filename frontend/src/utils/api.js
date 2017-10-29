import {requestCategories, receiveCategories, requestPosts,
  receivePosts, requestPost, receivePost, votingPost, votedPost } from '../actions'


const endpoint = process.env.REACT_APP_API_URL || 'http://localhost:3001'
let token = localStorage.token
if (!token){
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export function fetchCategories() {
  return dispatch => {
    const url = `${endpoint}/categories`
    console.log('fetching from url', url)
    dispatch(requestCategories())
    fetch(url, {headers, mode: 'cors'})
      .then( (res) => (res.text()))
      .then((data) => {
        console.log(data)
        dispatch(receiveCategories(JSON.parse(data)))
      }
    )
  }
}

export function fetchPosts() {
  return dispatch => {
    const url = `${endpoint}/posts`
    console.log('fetching from url', url)
    dispatch(requestPosts())
    fetch(url, {headers, mode: 'cors'})
      .then((res) => { return(res.text()) })
      .then((data) => {
        console.log(data)
        dispatch(receivePosts(JSON.parse(data)))
      }
    )
  }
}

export function fetchPost(id) {
  return dispatch => {
    const url = `${endpoint}/posts/${id}`
    console.log('fetching from url', url)
    dispatch(requestPost())
    fetch(url, {headers, mode: 'cors'})
      .then((res) => { return(res.text()) })
      .then((data) => {
        console.log(data)
        dispatch(receivePost(JSON.parse(data)))
      }
    )
  }
}

export function votePost(id, option) {
  return dispatch => {
    const url = `${endpoint}/posts/${id}`
    console.log('voting - fetching from url', url)
    fetch(url, {
      method: 'POST',
      headers: {
        ...headers,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ option })
    })
      .then((res) => {
        console.log(res)
        return(res.text())
      })
      .then((data) => {
        console.log(data)
        dispatch(votedPost(JSON.parse(data)))
      }
    )
  }
}
