import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import selectedPost from './selectedPost'
import comments from './comments'

export default combineReducers({
  categories,
  posts,
  selectedPost,
  comments
})
