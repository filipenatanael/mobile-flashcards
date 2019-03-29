import React, { Component } from 'react';
import { View, Text, Switch, Button, Animated } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { setLocalNotification, clearLocalNotification } from '../../utils/helpers';
import { black, green, red, lightWhite, lightYellow, lightGray, lightGreen, lightOrange, lightBlue } from '../../utils/colors';

class QuizView extends Component {
  state = {
    opacity: new Animated.Value(1),
    switchValue: false,
    rightAnswers: 0,
    wrongAnswers: 0,
    cardPosition: 0
  }

  static navigationOptions = ({ navigation }) => {
    const { decKey } = navigation.state.params;
    return {
      title: `Quiz for ${decKey}`
    };
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

  restartQuiz = () => {
    this.setState({
      switchValue: false,
      rightAnswers: 0,
      wrongAnswers: 0,
      cardPosition: 0
    });
  }

  render() {
    const { opacity, switchValue, cardPosition, rightAnswers, wrongAnswers } = this.state;
    const { decks } = this.props;

    const totalQuestions = decks.questions.length;
    const currentQuestion = decks.questions[cardPosition];

    if (cardPosition >= totalQuestions) {
      return (
        <Container>
          <QuestionContainer>
            <Counter>
              <Text style={{ fontSize: 18 }}>Results</Text>
            </Counter>
            <Question as={Animated.View} style={[{ opacity }]}>
              <Text style={{ fontSize: 23, textAlign: 'center' }}>
                {rightAnswers} / {totalQuestions} corrects {((rightAnswers / totalQuestions) * 100).toFixed(1)}%
              </Text>
            </Question>
          </QuestionContainer>

          <ButtonsContainer style={{ marginTop: 20 }}>
            <View style={{ marginTop: 0 }}>
              <Button title='Restart Quiz' color={lightBlue} onPress={() => this.restartQuiz()} />
            </View>
            <View style={{ marginTop: 15 }}>
              <Button title='Back To Deck' color={lightGreen} onPress={() => Actions.pop()} />
            </View>
          </ButtonsContainer>
        </Container>
      );
    }

    return (
      <Container>
        <QuestionContainer>
          <Counter>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: black }}>{cardPosition} / {totalQuestions}</Text>
          </Counter>
          <Question as={Animated.View} style={[{ opacity }]}>
            {!switchValue
              ? <Text style={{ fontSize: 23, fontWeight: 'bold', textAlign: 'center', color: black }}>{currentQuestion.question}</Text>
              : <Text style={{ fontSize: 23, fontWeight: 'bold', textAlign: 'center', color: black }}>{currentQuestion.answer}</Text>
            }

          </Question>
        </QuestionContainer>

        <SwitchContainer>
         <Text style={{ fontSize: 18, color: black, textAlign: 'center', marginRight: 15 }}>
          Show answer:
         </Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={switchValue}
          />
        </SwitchContainer>

        <ButtonsContainer>
          <View style={{ marginTop: 0 }}>
            <Button
              title="Corrent"
              color={lightGreen}
              onPress={() => {
                this.setState({
                  cardPosition: cardPosition + 1,
                  rightAnswers: wrongAnswers + 1
                });
            }}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Button
              title="Incorrent"
              color={lightOrange}
              onPress={() => {
                this.setState({
                  cardPosition: cardPosition + 1,
                  rightAnswers: rightAnswers + 1
                });
            }}
            />
          </View>
        </ButtonsContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  decks: state.decks[ownProps.decKey]
});

export default connect(mapStateToProps)(QuizView);

const Container = styled.View`
  flex: 1;
  flexDirection: column;
  padding: 15px;
  backgroundColor: ${lightWhite};
`;

const QuestionContainer = styled.View`
  flex: 3;
  backgroundColor: ${lightYellow};
  padding: 7px;
  borderWidth: 1;
  borderColor: ${lightGray};
  elevation: 1;
  opacity: 0.9;
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
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
`;

const ButtonsContainer = styled.View`
  flex: 3;
`;
