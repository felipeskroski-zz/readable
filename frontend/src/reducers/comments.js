import {
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  VOTE_COMMENT,
  NEW_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
} from '../actions/types'

export default function comments(state = {}, action) {
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
      const updatedC = state.comments.map(c => {
        if (c.id === comment.id) {
          c.body = comment.body
        }
        return c
      })

      return {
        ...state,
        comments: updatedC
      }
    default:
      return state
  }
}
