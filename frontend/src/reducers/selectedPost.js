import {
  REQUEST_POST,
  RECEIVE_POST,
  VOTED_POST,
} from '../actions/types'
export default function selectedPost(state = {}, action) {
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
