import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Dimensions } from 'react-native';
import styled from 'styled-components';
import { Constants } from 'expo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as DecksActions from '../actions/decks';

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
  componentWillMount() {
    this.props.loadDeckList();
  }

  renderItem = ({ item }) => {
    return <Desk key={item} title={item.title} numberOfCards={item.questions.length} />
  }

  render() {
    const { decks } = this.props;

    const data = Object.keys(decks).map(function(key) {
      return { 'key': key, ...decks[key]}
    });

    return (
      <ListContainer>
          <FlatList
            data={data}
            renderItem={this.renderItem}
          />

          <AddButtonOverlay>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => Actions.newDeck() }>
                <ImageStyled source={require('../../assets/ic_add_circle.png')} />
            </TouchableOpacity>
          </AddButtonOverlay>
      </ListContainer>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispachToProps = dispatch =>
  bindActionCreators(DecksActions, dispatch);

export default connect(mapStateToProps, mapDispachToProps)(DeckList);

/* Our styling */

const { height, width } = Dimensions.get('window');

const ListContainer = styled.View`
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

const ImageStyled = styled.Image`
  width: 55;
  height: 55;
`;

const AddButtonOverlay = styled.View`
  flexDirection: column;
  position: absolute;
  marginTop: ${height - (7 * Constants.statusBarHeight)};
  marginLeft: ${width - 80};
  opacity: 0.7;
`;
