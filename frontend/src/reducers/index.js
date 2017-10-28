import { combineReducers } from 'redux'
import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
} from '../actions'

const initialCategoryState = {


}

function categories (state = initialCategoryState, action) {
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


export default combineReducers({
  categories,
})
