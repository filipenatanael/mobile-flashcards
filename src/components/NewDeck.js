import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import * as DecksActions from '../actions/decks';
import { alertMessage } from '../../utils/helpers';
import { lightWhite, black, lightGray, lightGreen, lightBlue } from '../../utils/colors';

class NewDeck extends Component {
  state = {
      title: ''
  }
  /*
   onSubmit() {
      alert('I can refer this.. of that class without bind it on constructor.
     another way is use arrowfunctions as well')
   }
  */
  onSubmit = () => {
    const { title } = this.state;
    if (title.length >= 5) {
      this.props.addNewDeck(this.state.title);
      alertMessage('Success!!', 'A new deck was added!!', () => Actions.pop());
    } else {
      alertMessage('Sorry!!', 'The deck title needs at least 5 characters!', () => false);
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>
            What is the title of your new deck?
          </Title>
        </Header>

        <Body>
          <TextInputCustom
            placeholder='New Deck Title'
            underlineColorAndroid='transparent'
            maxLength={15}
            autoCapitalize='words'
            value={this.state.title}
            onChangeText={(title) => this.setState({ title })}
          />

          <TouchableOpacityCustom onPress={this.onSubmit}>
              <SaveDeckButton>
                Save Deck
              </SaveDeckButton>
          </TouchableOpacityCustom>
        </Body>
      </Container>
    );
  }
}

const mapDispachToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

export default connect(null, mapDispachToProps)(NewDeck);

const Container = styled.View`
  flex: 1;
  flexDirection: column;
  padding: 10px;
  backgroundColor: ${lightWhite}
`;

const Header = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${lightBlue};
  borderRadius: 4;
  shadowRadius: 3;
  shadowOpacity: 1;
  elevation: 1;
`;

const Title = styled.Text`
  textAlign: center;
  fontSize: 23;
  fontWeight: bold;
  color: ${black};
`;

const Body = styled.View`
  flex: 3;
  marginTop: 20;
`;

const TextInputCustom = styled.TextInput`
  height: 50;
  color: ${black};
  borderColor: ${lightGray};
  borderWidth: 0.3;
  borderRadius: 4;
  paddingLeft: 12;
  fontSize: 18;
`;

const TouchableOpacityCustom = styled.TouchableOpacity`
  marginTop: 30;
  backgroundColor: ${lightGreen};
  paddingTop: 10;
  paddingBottom: 10;
  borderRadius: 35;
  justifyContent: center;
  alignItems: center;
  elevation: 2;
`;

const SaveDeckButton = styled.Text`
  textAlign: center;
  fontSize: 23;
  fontWeight: bold;
  color: ${black};
`;
