import * as api from "../utils/api"
import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_POST,
  RECEIVE_POST,
  NEW_POST,
  DELETE_POST,
  UPDATE_POST,
  VOTED_POST,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  VOTE_COMMENT,
  NEW_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
} from './types'

//get all categories
export const fetchCategories = () => dispatch => {
  dispatch(requestCategories())
  api.getCategories()
    .then(categories => dispatch(receiveCategories(categories)))
}


export const requestCategories = () => ({
  type: REQUEST_CATEGORIES,
})


export const receiveCategories = (categories) =>({
  type: RECEIVE_CATEGORIES,
  categories
})

//---------------------------
//POSTS
//---------------------------
// get all posts
export const fetchPosts = () => dispatch => {
  dispatch(requestPosts())
  api.getPosts()
    .then(posts => dispatch(receivePosts(posts)))
}


export const requestPosts = () => ({
  type: REQUEST_POSTS
})


export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

// get post
export const fetchPost = id => dispatch => {
  dispatch(requestPost())
  api.getPost(id)
    .then(post => dispatch(receivePost(post)))
}


export const requestPost = () => ({
  type: REQUEST_POST
})


export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

//vote post
export const fetchVotePost = (id, option) => dispatch =>
  api.votePost(id, option)
  .then(post => {
    console.log(post)
    dispatch(votedPost(post))
  })


export const votedPost = (post) => ({
  type: VOTED_POST,
  post
})

//add post
export const fetchNewPost = post => dispatch =>
  api.addPost(post)
  .then(post => dispatch(newPost(post)))

export const newPost = (post) => ({
  type: NEW_POST,
  post
})


//delete post
export const fetchDeletePost = id => dispatch =>
  api.deletePost(id)
  .then(post => dispatch(deletePost(id)))


export const deletePost = id => ({
  type: DELETE_POST,
  id
})


// edit post
export const fetchUpdatePost = (id, post) => dispatch =>
  api.updatePost(id, post).then(post => dispatch(updatePost(post)))


export const updatePost = post => ({
  type: UPDATE_POST,
  post
})


//---------------------------
//COMMENTS
//---------------------------

//Get comments by post
export const fetchComments = postId => dispatch =>
  api.getComments(postId).then(comments => dispatch(receiveComments(comments)))


export const requestComments = comments => ({
  type: REQUEST_COMMENTS,
})


export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

//vote comment
export const fetchVoteComment = (id, option) => dispatch =>
  api.voteComment(id, option)
    .then(comment => dispatch(voteComment(comment)))


export const voteComment = (comment) => ({
  type: VOTE_COMMENT,
  comment
})

//add commment
export const fetchNewComment = comment => dispatch =>
  api.addComment(comment)
  .then(comment => dispatch(newComment(comment)))


export const newComment = comment => ({
  type: NEW_COMMENT,
  comment
})


// delete comment
export const fetchDeleteComment = id => dispatch =>
  api.deleteComment(id)
    .then(id => dispatch(deleteComment(id)))


export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

// update comment
export const fetchUpdateComment = (id, comment) => dispatch =>
  api.updateComment(id, comment)
    .then(comment => dispatch(updateComment(comment)))


export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment
});
