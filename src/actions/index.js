export const ADD_NEW_DESK = 'ADD_NEW_DESK';

export function addNewDeck(title) {
  return {
    type: ADD_NEW_DESK,
    payload: title
  }
}
