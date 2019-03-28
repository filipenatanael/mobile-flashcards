import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'MobileFlashcards:flashcards'

let dataStore = {
  CardDemo: {
    title: 'CardDemo',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      }
    ]
  },
  // JavaScript: {
  //   title: 'JavaScript',
  //   questions: [
  //     {
  //       question: 'What is a closure?',
  //       answer: 'The combination of a function and the lexical environment within which that function was declared.'
  //     }
  //   ]
  // }
}

let callback = null

export function _saveDeck(newDeck){
  // clearStorage();

  AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((decksStored) => {
    let decksJSON = JSON.parse(decksStored);
    const mergeDesks = { ...decksJSON, ...newDeck};
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(mergeDesks), () => {
      AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(loggerResults)
    });
  })
}

/*
_getDecks: return all of the decks along with their titles, questions, and answers.
*/
export function _getDecks(){
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(response => JSON.parse(response))
      .then(response => {
        return response !== null
          ? response
          : dataStore
  });
}

/*
_saveCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
*/
export function _saveCardToDeck(decKey, card){
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((decksStored) => {
    let decks = JSON.parse(decksStored);
    decks[decKey].questions.push(card)
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
  })

  // return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,JSON.stringify({ [decKey]: card }));
}

export function clearStorage() {
  AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, '');
}

export function loggerResults(results) {
  // console.log('Newdecks Stored [deckResults]: ', JSON.parse(results));
}

export function initDataStore(cb) {
  callback = cb
  // AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(deckResults)
}

/*
getDeck: take in a single id argument and return the deck associated with that id.
*/
export function getDeck(deckId){
  const deckData = _getDecks()
  console.log("all data:"+JSON.stringify(deckData))
  // AJS -- not sure if this works
  return deckData[deckId]
}

/*
_saveDeckTitle: take in a single title argument and add it to the decks.
AKA: "New Deck"
*/
export function _saveDeckTitle(title){
  var newEntry = {title:title,questions:new Array()}
  dataStore[title]=newEntry
  _saveDeck()
  //return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,JSON.stringify(newEntry))
}
