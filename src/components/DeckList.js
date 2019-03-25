import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const DeskContainer = styled.View`
  flexDirection: row;
  height: 80px;
  marginTop: 7px;
  padding: 10px;
  backgroundColor: #ffeaa7;
  justifyContent: center;
  alignItems: center;
  borderRadius: 4;
  shadowRadius: 3;
  shadowOpacity: 1;
  elevation: 1;
  zIndex: 1
`;

const ListContainer = styled.View`
  flex: 1;
  flexDirection: column;
  margin: 7px;
`;

function Desk({ title, numberOfCards }) {
  return (
    <DeskContainer>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#2d3436' }}>{title}</Text>
        <Text style={{ textAlign: 'center', fontSize: 15, color: '#636e72', marginTop: 2 }}>{numberOfCards} Cards</Text>
      </View>
    </DeskContainer>
  );
}

class DeckList extends Component {
  render() {
    return (
      <ListContainer>
        <Desk title="React" numberOfCards={5} />
        <Desk title="React" numberOfCards={5} />
        <Desk title="React" numberOfCards={5} />
      </ListContainer>
    );
  }
}

export default DeckList;
