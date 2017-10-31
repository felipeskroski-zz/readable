import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  NEW_POST,
  DELETE_POST,
  UPDATE_POST,
  VOTED_POST,
} from '../actions/types'

export default function posts (state = {}, action) {
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
        ...post
      }
    case UPDATE_POST:
      const updatedP = state.posts.map(p => {
        if (p.id === post.id) {
          p.body = post.body
          p.title = post.title
        }
        return p
      })
      return {
        ...state,
        posts: updatedP
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
