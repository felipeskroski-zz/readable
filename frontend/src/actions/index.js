export const ADD_CATEGORY = 'ADD_CATEGORY'
export function addCategory({category}){
  return {
    type: ADD_CATEGORY,
    category
  }
}

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export function requestCategories(){
  return {
    type: REQUEST_CATEGORIES,
  }
}

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export function receiveCategories({categories}){
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
export function removeFromCalendar(category){
  return {
    type: REMOVE_CATEGORY,
    category,
  }
}
