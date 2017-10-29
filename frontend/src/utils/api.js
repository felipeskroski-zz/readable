const endpoint = process.env.REACT_APP_API_URL || 'http://localhost:3001'
let token = localStorage.token
if (!token){
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

//POSTS
export const getCategories = () =>
  fetch(`${endpoint}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPosts = () =>
  fetch(`${endpoint}/posts`, {headers})
    .then(res => res.json())

export const getPostsByCategory = (category) =>
  fetch(`${endpoint}/${category}/posts`, { headers })
    .then(res => res.json())


//POST
export const getPost = id =>
  fetch(`${endpoint}/posts/${id}`, {
    headers
  }).then(res => res.json())

export const addPost = post =>
  fetch(`${endpoint}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify(post)
  }).then(data => data.json())

export const editPost = (post, postId) =>
  fetch(`${endpoint}/posts/${postId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(post)
  }).then(data => data.json())

export const deletePost = postId =>
  fetch(`${endpoint}/posts/${postId}`, {
    method: "DELETE",
    headers
  }).then(res => res)

export const votePost = (postId, option) =>
  fetch(`${endpoint}/posts/${postId}`, {
    method: `POST`,
    headers,
    body: JSON.stringify({ option })
  }).then(res => res.json())



//
//COMMENTS
//
export const getComment = commentId =>
  fetch(`${endpoint}/comments/${commentId}`, { headers })
    .then(res => res.json().then(data => data))

//
//Comments
//
export const getComments = postId =>
  fetch(`${endpoint}/posts/${postId}/comments`, { headers })
  .then(res => res.json().then(data => data))

export const addComment = comment =>
  fetch(`${endpoint}/comments/`, {
    method: "POST",
    headers,
    body: JSON.stringify(comment)
  }).then(response => response.json())

export const editComment = (comment, commentId) => {
  return fetch(`${endpoint}/comments/${commentId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(comment)
  }).then(data => data.json())
}

export const deleteComment = commentId => {
  return fetch(`${endpoint}/comments/${commentId}`, {
    method: "DELETE",
    headers
  }).then(response => response.json())
}

export const voteComment = (commentId, option) =>
  fetch(`${endpoint}/comments/${commentId}`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      option: option
    })
  }).then(data => data.json())
