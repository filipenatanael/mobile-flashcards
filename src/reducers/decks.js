
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

export default function(state = initialState, action) {
  console.log('FROM REDUCER: ', action);
  switch (action.type) {
    case 'RECEIVE_DECKS':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
