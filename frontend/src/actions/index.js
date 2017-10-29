import * as api from "../utils/api"

export const fetchCategories = () => dispatch => {
  dispatch(requestCategories())
  api.getCategories()
    .then(categories => dispatch(receiveCategories(categories)))
}

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const requestCategories = () => ({
  type: REQUEST_CATEGORIES,
})

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const receiveCategories = (categories) =>({
  type: RECEIVE_CATEGORIES,
  categories
})



export const fetchPosts = () => dispatch => {
  dispatch(requestPosts())
  api.getPosts()
    .then(posts => dispatch(receivePosts(posts)))
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})


export const fetchPost = id => dispatch => {
  dispatch(requestPost())
  api.getPost(id)
    .then(post => dispatch(receivePost(post)))
}

export const REQUEST_POST = 'REQUEST_POST'
export const requestPost = () => ({
  type: REQUEST_POST
})

export const RECEIVE_POST = 'RECEIVE_POST'
export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})


export const fetchVotePost = (id, option) => dispatch =>
  api.votePost(id, option)
  .then(post => {
    console.log(post)
    dispatch(votedPost(post))
  })

export const VOTED_POST = 'VOTED_POST'
export const votedPost = (post) => ({
  type: VOTED_POST,
  post
})


export const fetchNewPost = post => dispatch => {
  api.addPost(post)
  .then(post => dispatch(addPost(post)))
}


export const ADD_POST = 'ADD_POST'
export const addPost = (post) => ({
  type: ADD_POST,
  post
})
