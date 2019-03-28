export const ADD_NEW_DESK = 'ADD_NEW_DESK';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';

import {
  _getDecks,
  _saveDeck,
  _saveCardToDeck
} from '../../utils/storage';

export function loadDeckList() {
  return dispatch => {
    _getDecks().then((results) => {
      dispatch({ type: RECEIVE_DECKS, payload: results });
    });
  }
}

export function addNewDeck(title) {
  const questions = new Array();
  let newDeck = {}
  newDeck[title] = { title: title, questions: new Array() }
  // { title: { title: title, questions: new Array() } }
  _saveDeck(newDeck)
  return {
    type: ADD_NEW_DESK,
    payload: newDeck
  }
}

export function addCardToDeck(decKey, card) {
  return dispatch => {
    // The application will update modified state only...
    _saveCardToDeck(decKey, card).then(() => {
      dispatch({
        type: ADD_NEW_CARD,
        payload: {
          decKey,
          card: card
        }
      });
    })
  }
}
