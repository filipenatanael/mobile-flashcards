import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { lightBack, lightGray } from '../../utils/colors';

/* Our components */
import DeckList from '../components/DeckList';
import NewDeck from '../components/NewDeck';
import DeckView from '../components/DeckView';
import AddCard from '../components/AddCard';
import QuizView from '../components/QuizView';

export default class Routes extends Component {
  render() {
    return (
      <Router
        navigationBarStyle={{ backgroundColor: `${lightBack}` }}
        titleStyle={{ color: `${lightGray}` }}>
        <Scene key='root' headerTintColor={lightGray}>
          <Scene key='deckList' component={DeckList} title='Deck List' initial />
          <Scene key='newDeck' component={NewDeck} title='New Deck' />
          <Scene key='deckView' component={DeckView} title='Deck View' />
          <Scene key='addCard' component={AddCard} title='Add Card' />
          <Scene key='quizView' component={QuizView} title='Quiz View' />
        </Scene>
      </Router>
    );
  }
}
