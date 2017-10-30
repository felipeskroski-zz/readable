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

export const addPost = post =>{
  console.log('addPost')
  console.log(post)
  return fetch(`${endpoint}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify(post)
  }).then(res => res.json())
}


export const editPost = (id, post) =>
  fetch(`${endpoint}/posts/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(post)
  }).then(data => data.json())

export const deletePost = id =>
  fetch(`${endpoint}/posts/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res)

export const votePost = (id, option) =>
  fetch(`${endpoint}/posts/${id}`, {
    method: `POST`,
    headers,
    body: JSON.stringify({ option })
  }).then(res => res.json())



//
//COMMENTS
//
export const getComment = id =>
  fetch(`${endpoint}/comments/${id}`, { headers })
    .then(res => res.json().then(data => data))

export const getComments = postId =>
  fetch(`${endpoint}/posts/${postId}/comments`, { headers })
  .then(res => res.json().then(data => data))

export const addComment = comment =>
  fetch(`${endpoint}/comments/`, {
    method: "POST",
    headers,
    body: JSON.stringify(comment)
  }).then(response => response.json())

export const editComment = (comment, id) => {
  return fetch(`${endpoint}/comments/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(comment)
  }).then(data => data.json())
}

export const deleteComment = id => {
  return fetch(`${endpoint}/comments/${id}`, {
    method: "DELETE",
    headers
  }).then(response => response.json())
}

export const voteComment = (id, option) =>
  fetch(`${endpoint}/comments/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      option: option
    })
  }).then(data => data.json())
