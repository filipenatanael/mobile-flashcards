import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import OverlayButton from './shared/OverlayButton';

export default class DeckView extends Component {
  render() {
    return (
      <Container>
        <DeskContainer>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 20, color: '#2d3436' }}>{'title'}</Text>
            <Text style={{ textAlign: 'center', fontSize: 15, color: '#636e72', marginTop: 2 }}> Cards</Text>
          </View>
        </DeskContainer>

          <OverlayButton
            marginLeft={10}
            icon={require("../../assets/ic_add_circle.png")}
            onPress={() => alert('Add New Questions...')} />

          <OverlayButton
            icon={require("../../assets/ic_play_game.png")}
            onPress={() => alert('Play Game...')} />

        <Text>{JSON.stringify(this.props)}</Text>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  flexDirection: column;
  marginTop: 0px;
  marginLeft: 7px;
  marginRight: 7px;
  marginBottom: 7px;
  zIndex: 1;
`;

const DeskContainer = styled.View`
  flexDirection: row;
  height: 100px;
  marginTop: 10px;
  padding: 10px;
  backgroundColor: #a29bfe;
  justifyContent: center;
  alignItems: center;
  borderRadius: 4;
  shadowOpacity: 1;
  elevation: 1;
`;
