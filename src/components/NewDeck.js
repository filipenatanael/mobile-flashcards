import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

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

const SaveDeckButton = styled.Text`
  textAlign: center;
  fontSize: 23;
  fontWeight: bold;
  color: #fff;
`;

class NewDeck extends Component {
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
            onChangeText={() => false}
          />

          <TouchableOpacityCustom
            onPress={() => false}>
              <SaveDeckButton>
                Save Deck
              </SaveDeckButton>
          </TouchableOpacityCustom>
        </Body>
      </Container>
    );
  }
}

export default NewDeck;
