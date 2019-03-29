import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated
} from 'react-native';
import styled from 'styled-components';
import { Constants } from 'expo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as DecksActions from '../actions/decks';
import { black, gray } from '../../utils/colors';

function getRandomColor() {
  const position = Math.floor(Math.random() * 5);
  const colors = ['#bedef2', '#bfeabe', '#f2d8c6', '#f0efb0'];
  return colors[position];
}

function Desk({ decKey, title, numberOfCards }) {
  const dynamicColor = getRandomColor();

  return (
    <TouchableOpacity onPress={() => Actions.deckView({ decKey, dynamicColor })}>
      <DeskContainer style={{ backgroundColor: `${dynamicColor}` }}>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: 'bold', color: `${black}` }}>{title}</Text>
            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: `${gray}`, marginTop: 2 }}>{numberOfCards} Cards</Text>
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

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
  }

  renderItem = ({ item }) => {
    return <Desk
      key={item.key}
      decKey={item.key}
      title={item.title}
      numberOfCards={item.questions.length}
    />;
  }

  render() {
    const { opacity } = this.state;
    const { decks } = this.props;

    const data = Object.keys(decks).map((key) => {
      return { key, ...decks[key] }
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
  paddingLeft: 15px;
  paddingRight: 15px;
  paddingBottom: 15px;
  backgroundColor: #fcfcfc;
  zIndex: 1;
`;

const DeskContainer = styled.View`
  flexDirection: row;
  height: 100px;
  marginTop: 15px;
  padding: 10px;
  backgroundColor: #f0efb0;
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
  opacity: 0.6;
`;
