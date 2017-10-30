import { combineReducers } from 'redux'
import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_POST,
  RECEIVE_POST,
  NEW_POST,
  DELETE_POST,
  EDIT_POST,
  VOTED_POST,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  VOTE_COMMENT,
  NEW_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
} from '../actions'


function categories (state = {}, action) {
  const { categories } = action

  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state
      }
    case RECEIVE_CATEGORIES:
      return {
        categories
      }
    default :
      return state
  }
}


function posts (state = {}, action) {
  const { posts, post, id } = action
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        posts
      }
    case VOTED_POST:
      const updatedPosts = state.posts.map(p => {
        if(p.id === post.id){
          p.voteScore = post.voteScore
        }
        return p
      })

      return {
        ...state,
        posts: updatedPosts
      }
    case NEW_POST:
      return {
        ...state,
        ...action.post
      }
    case EDIT_POST:
      return {
        ...state,
        ...action.post
      }
    case DELETE_POST:
      const remainingPosts = state.posts.filter(p => (p.id !== id))
      console.log('DELETE_POST')
      console.log(remainingPosts)
      return {
        ...state,
        posts: remainingPosts
      }
    default :
      return state
  }
}

function selectedPost(state = {}, action) {
  const { post } = action
  switch (action.type) {
    case REQUEST_POST:
      return {
        ...state,
        selectedPost: false
      }
    case RECEIVE_POST:
      return {
        ...state,
        selectedPost: post
      }
    case VOTED_POST:
      return {
        ...state,
        selectedPost: post
      }
    default :
      return state
  }
}

function comments(state = {}, action) {
  const { comments, comment, id } = action
  switch (action.type) {
    case REQUEST_COMMENTS:
      return {
        ...state,
        comments: false
      }
    case RECEIVE_COMMENTS:
      return {
        ...state,
        comments
      }

    case VOTE_COMMENT:
      const updatedComments = state.comments.map(item => {
        if (item.id === comment.id) {
          item.voteScore = comment.voteScore
        }
        return item
      })
      console.log('VOTE_COMMENT')
      console.log(updatedComments)
      return {
        ...state,
        comments: updatedComments
      }
    case NEW_COMMENT:
      return {
        ...state,
        comments: state.comments.concat(comment)
      }
    case DELETE_COMMENT:
      const remainingComments = state.comments.filter(item =>
        item.id !== id
      )
      return {
        ...state,
        comments: remainingComments
      }
    case UPDATE_COMMENT:
      const updated = state.comments.map(c => {
        if (c.id === comment.id) {
          c.body = comment.body
        }
        return c
      })

      return {
        ...state,
        comments: updated
      }
    default:
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  selectedPost,
  comments
})
