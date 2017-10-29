export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export function requestCategories(){
  return {
    type: REQUEST_CATEGORIES,
  }
}

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export function receiveCategories({categories}){
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
export function requestPosts(){
  return {
    type: REQUEST_POSTS
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export function receivePosts(posts){
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const REQUEST_POST = 'REQUEST_POST'
export function requestPost(){
  return {
    type: REQUEST_POST
  }
}

export const RECEIVE_POST = 'RECEIVE_POST'
export function receivePost(post){
  return {
    type: RECEIVE_POST,
    post
  }
}

export const VOTED_POST = 'VOTED_POST'
export function votedPost(post){
  return {
    type: VOTED_POST,
    post
  }
}
