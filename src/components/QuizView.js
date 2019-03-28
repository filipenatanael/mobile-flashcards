import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { setLocalNotification, clearLocalNotification } from '../../utils/helpers';

class QuizView extends Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }
  render() {
    return (
      <View>
        <Text>Quiz Component.</Text>
      </View>
    );
  }
}

export default QuizView;
