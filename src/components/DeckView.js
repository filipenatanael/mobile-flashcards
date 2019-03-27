import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DeckView extends Component {
  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}
