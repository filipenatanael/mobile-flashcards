import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as DecksActions from '../actions/decks';
import styled from 'styled-components';

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  static navigationOptions = ({navigation}) => {
    const { decKey } = navigation.state.params
    return {
      title: 'Add card to ' + decKey
    }
  }

  onSubmit = (decKey) => {
    this.props.addCardToDeck(decKey, this.state);
    Actions.deckView({ decKey })
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>
            {this.props.decKey}
          </Title>
        </Header>

        <Body>
          <TextInputCustom
            placeholder='Enter your question...'
            underlineColorAndroid='transparent'
            maxLength={50}
            autoCapitalize='words'
            value={this.state.question}
            onChangeText={(question) => this.setState({ question })}
          />

          <TextInputCustom
            placeholder='Enter your answer...'
            underlineColorAndroid='transparent'
            maxLength={50}
            autoCapitalize='words'
            value={this.state.answer}
            onChangeText={(answer) => this.setState({ answer })}
          />

          <TouchableOpacityCustom
            onPress={() => this.onSubmit(this.props.decKey)}>
              <ButtonText>
                Save Card
              </ButtonText>
          </TouchableOpacityCustom>
        </Body>
      </Container>
    );
  }
}

const mapDispachToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

export default connect(null, mapDispachToProps)(AddCard);

const Container = styled.View`
  flex: 1;
  flexDirection: column;
  margin: 10px;
`;

const Header = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: #dfe6e9;
  borderRadius: 4;
  shadowRadius: 3;
  shadowOpacity: 1;
  elevation: 1;
`;

const Title = styled.Text`
  textAlign: center;
  fontSize: 23;
  fontWeight: bold;
  color: #6c5ce7;
`;

const Body = styled.View`
  flex: 3;
  marginTop: 20;
`;

const TextInputCustom = styled.TextInput`
  marginTop: 20;
  height: 50;
  color: #2d3436;
  borderColor: #636e72;
  borderWidth: 0.3;
  borderRadius: 4;
  paddingLeft: 12;
  fontSize: 18;
`;

const TouchableOpacityCustom = styled.TouchableOpacity`
  marginTop: 30;
  backgroundColor: #636e72;
  paddingTop: 10;
  paddingBottom: 10;
  borderRadius: 35;
  justifyContent: center;
  alignItems: center;
  elevation: 2;
`;

const ButtonText = styled.Text`
  textAlign: center;
  fontSize: 23;
  fontWeight: bold;
  color: #fff;
`;
