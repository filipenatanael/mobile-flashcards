export const ADD_NEW_DESK = 'ADD_NEW_DESK';
import { getDecks, saveDeck } from '../../utils/storage';

export function loadDeckList() {

  return dispatch => {
    const questions = new Array();
    let newDeck = {}
    newDeck['title'] = { 'title': 'title', questions: new Array() }
    dispatch({ type: 'RECEIVE_DECKS', payload: newDeck });

    getDecks().then((results) => {
      console.log('KKKKKKKKKKKKK', results);
      // let test =  JSON.parce(results)
      dispatch({ type: 'RECEIVE_DECKS', payload: results })
    });
  }
  // return {
  //   type: 'RECEIVE_DECKS',
  //   payload: getDecks()
  // }
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
