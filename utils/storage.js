import { AsyncStorage } from 'react-native'

export const FLASHCARD_STORAGE_KEY = 'MobileFlashcards:flashcards'

let dataStore = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function saveDeck(newDeck){
  // AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, '');

  AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((decksStored) => {
    let decksJSON = JSON.parse(decksStored);
    const mergeDesks = { ...decksJSON, ...newDeck};
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(mergeDesks), () => {
      AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(deckResults)
    });
  })
}

let callback = null

export function deckResults (results) {
  console.log('Newdecks Stored [deckResults]: ',JSON.parse(results));
  // dataStore = JSON.parse(results)
  // callback(dataStore)
}


export function initDataStore(cb) {
  callback = cb
  // AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(deckResults)
}

/*
getDecks: return all of the decks along with their titles, questions, and answers.
*/
export function getDecks(){
  // return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => {

  // })
  return dataStore;
}
/*
getDeck: take in a single id argument and return the deck associated with that id.
*/
export function getDeck(deckId){
  const deckData = getDecks()
  console.log("all data:"+JSON.stringify(deckData))
  // AJS -- not sure if this works
  return deckData[deckId]
}

/*
saveDeckTitle: take in a single title argument and add it to the decks.
AKA: "New Deck"
*/
export function saveDeckTitle(title){
  var newEntry = {title:title,questions:new Array()}
  dataStore[title]=newEntry
  //console.log("saveDeckTitle")
  //console.log(dataStore)
  saveDeck()
  //return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,JSON.stringify(newEntry))

  //  title: 'React',
  //  questions: []
}
/*
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

*/
export function addCardToDeck(title,card){

  dataStore[title].questions.push(card)
  saveDeck()

  //  questions: []

  //  {
  //    question: 'What is React?',
  //    answer: 'A library for managing user interfaces'
  //  },

  //  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,JSON.stringify({
  //  [title]:card,
  //}))
}
