import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';
import DeckList from './src/components/DeckList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
