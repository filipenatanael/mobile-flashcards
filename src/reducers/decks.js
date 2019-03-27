import { ADD_NEW_DESK, RECEIVE_DECKS } from '../actions/decks';

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
  console.log('FROM REDUCER: ', action);
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
    default:
      return state
  }
}
