
initialState = {
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
  }
}

export default function(state = initialState, action) {
  console.log('FROM REDUCER: ', action);
  switch (action.type) {
    case 'RECEIVE_DECKS':
    console.log('RECEIVE_DECKS', action.payload);
      return {
        ...state,
        ...action.payload
      }
    case 'ADD_NEW_DESK':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
