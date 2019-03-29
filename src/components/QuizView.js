import React, { Component } from 'react';
import { View, Text, Switch, Button, Animated } from 'react-native';
import styled from 'styled-components';
import { setLocalNotification, clearLocalNotification } from '../../utils/helpers';

const Container = styled.View`
  flex: 1;
  flexDirection: column;
  margin: 7px;
`;

const QuestionContainer = styled.View`
  flex: 3;
  backgroundColor: #ffeaa7;
  padding: 7px;
  borderWidth: 1;
  borderColor: #ccc;
  elevation: 1;
  opacity: 0.8;
  borderRadius: 4;
`;

const Counter = styled.View`
  height: 30;
  justifyContent: center;
`;

const Question = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const SwitchContainer = styled.View`
  flex: 1;
  justifyContent: center;
`;

const ButtonsContainer = styled.View`
  flex: 3;
`;

class QuizView extends Component {
  state = {
    opacity: new Animated.Value(1),
    switchValue: false
  }

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  toggleAnimate = () => {
    const { opacity } = this.state;

    Animated.timing(opacity, { toValue: 0, duration: 1000 }).start();
  }

  toggleSwitch = (value) => {
    this.setState({
      switchValue: value
    });
  }

  render() {
    const { opacity, switchValue } = this.state;

    return (
      <Container>
        <QuestionContainer>
          <Counter>
            <Text style={{ fontSize: 18 }}>1/2</Text>
          </Counter>
          <Question as={Animated.View} style={[{ opacity }]}>
            {!switchValue
              ? <Text style={{ fontSize: 23 }}>Question Text</Text>
              : <Text style={{ fontSize: 23 }}>Answer Text</Text>
            }

          </Question>
        </QuestionContainer>

        <SwitchContainer>
          <Switch
            onValueChange={this.toggleSwitch}
            value={switchValue}
          />
        </SwitchContainer>

        <ButtonsContainer>
          <View style={{ marginTop: 0 }}>
            <Button title="Corrent" color="#00b894" onPress={() => this.toggleAnimate()} />
          </View>
          <View style={{ marginTop: 10 }}>
            <Button title="Incorrent" color="#e17055" onPress={() => false} />
          </View>
        </ButtonsContainer>
      </Container>
    );
  }
}

export default QuizView;
