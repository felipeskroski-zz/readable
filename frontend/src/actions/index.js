export const ADD_CATEGORY = 'ADD_CATEGORY'
export function addCategory({category}){
  return {
    type: ADD_CATEGORY,
    category
  }
}

export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
export function removeFromCalendar({category}){
  return {
    type: REMOVE_CATEGORY,
    category,
  }
}
