import { AsyncStorage } from 'react-native';

export const FLASHCARD_STORAGE_KEY = 'MobileFlashcards:flashcards';

const dataStore = {
  CardDemo: {
    title: 'CardDemo',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      }
    ]
  }
};

export function _saveDeck(newDeck) {
  // clearStorage();

  AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((decksStored) => {
    const decksJSON = JSON.parse(decksStored);
    const mergeDesks = { ...decksJSON, ...newDeck };
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(mergeDesks), () => {
      AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(loggerResults);
    });
  });
}

/*
_getDecks: return all of the decks along with their titles, questions, and answers.
*/
export function _getDecks() {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(response => JSON.parse(response))
      .then(response => {
        return response !== null
          ? response
          : dataStore
  });
}

/*
_saveCardToDeck: take in two arguments, title and card,
and will add the card to the list of questions for the deck with the associated title.
*/
export function _saveCardToDeck(decKey, card) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((decksStored) => {
    const decks = JSON.parse(decksStored);
    decks[decKey].questions.push(card);
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
  });

  // return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY,JSON.stringify({ [decKey]: card }));
}

export function clearStorage() {
  AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, '');
}

export function loggerResults(results) {
  console.log('Newdecks Stored [deckResults]: ', JSON.parse(results));
}
