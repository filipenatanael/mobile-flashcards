import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image, ScrollView,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Animated } from 'react-native';
import styled from 'styled-components';
import { Constants } from 'expo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as DecksActions from '../actions/decks';

function Desk({ decKey, title, numberOfCards }) {
  return (
    <TouchableOpacity onPress={() => Actions.deckView({ decKey: decKey })}>
      <DeskContainer>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 23, color: '#2d3436' }}>{title}</Text>
          <Text style={{ textAlign: 'center', fontSize: 18, color: '#636e72', marginTop: 2 }}>{numberOfCards} Cards</Text>
        </View>
      </DeskContainer>
    </TouchableOpacity>
  );
}

class DeckList extends Component {
  state = {
    opacity: new Animated.Value(0)
  }

  componentWillMount() {
    this.props.loadDeckList();
  }

  renderItem = ({ item }) => {
    return <Desk key={item.key} decKey={item.key} title={item.title} numberOfCards={item.questions.length} />
  }

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
  }

  render() {
    const { opacity } = this.state;
    const { decks } = this.props;

    const data = Object.keys(decks).map(function(key) {
      return { 'key': key, ...decks[key]}
    });

    return (
      <ListContainer as={Animated.View} style={[{ opacity }]}>
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
