import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

/* Our components */
import DeckList from '../components/DeckList';

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#00b894' }} titleStyle={{ color: 'white' }}>
        <Scene key='root'>
          <Scene key='deckList' component={DeckList} title='Deck List' initial={true} />
        </Scene>
      </Router>
    );
  }
}