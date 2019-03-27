export const ADD_NEW_DESK = 'ADD_NEW_DESK';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';

import { getDecks, saveDeck } from '../../utils/storage';

export function loadDeckList() {
  return dispatch => {
    getDecks().then((results) => {
      dispatch({ type: RECEIVE_DECKS, payload: results });
    });
  }
}

export function addNewDeck(title) {
  const questions = new Array();
  let newDeck = {}
  newDeck[title] = { title: title, questions: new Array() }
  // { title: { title: title, questions: new Array() } }
  saveDeck(newDeck)
  return {
    type: ADD_NEW_DESK,
    payload: newDeck
  }
}
