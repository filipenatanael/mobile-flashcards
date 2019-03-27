export const ADD_NEW_DESK = 'ADD_NEW_DESK';
import { getDecks, saveDeck } from '../../utils/storage';

export function loadDeckList() {
  return {
    type: 'RECEIVE_DECKS',
    payload: getDecks()
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
