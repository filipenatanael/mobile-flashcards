import { ADD_NEW_DESK, RECEIVE_DECKS, ADD_NEW_CARD } from '../actions/decks';

initialState = {
  CardDemo: {
    title: 'Card Demo Redux',
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
  }
}

export default function(state = initialState, action) {
  if (action.type == 'ADD_NEW_CARD') {
    console.log('FROM REDUCER: ', action);
  }
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.payload
      }
    case ADD_NEW_DESK:
      return {
        ...state,
        ...action.payload
      }
    case ADD_NEW_CARD:
      const { decKey, card } = action.payload;
      return {
        ...state,
        [decKey]: {
          ...state[decKey],
          questions: state[decKey].questions.concat(card)
        }
      }
    default:
      return state
  }
}
