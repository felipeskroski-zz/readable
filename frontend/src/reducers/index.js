import { combineReducers } from 'redux'
import {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
} from '../actions'

const initialCategoryState = {


}

function category (state = initialCategoryState, action) {
  const { category } = action

  switch (action.type) {
    case ADD_CATEGORY :
      return {
        ...state,
        category
      }
    case REMOVE_CATEGORY :
      return {
        ...state,
        category
      }
    default :
      return state
  }
}


export default combineReducers({
  category,
})
