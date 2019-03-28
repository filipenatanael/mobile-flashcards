import React, { Component } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import OverlayButton from './shared/OverlayButton';

class DeckView extends Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity, width, height } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
    Animated.spring(width, { toValue: 300, speed: 5 }).start();
    Animated.spring(height, { toValue: 300, speed: 5 }).start();
  }

  render() {
    const { opacity, width, height } = this.state;
    const { decKey, decks } = this.props;

    return (
      <Container>
        <DeskContainer>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 23, color: '#2d3436' }}>{decks.title}</Text>
            <Text style={{ textAlign: 'center', fontSize: 18, color: '#636e72', marginTop: 2 }}>{decks.questions.length} Cards</Text>
          </View>
        </DeskContainer>

        <ImageContainer>
          <Animated.Image style={{ opacity, width, height, marginTop: -90 }} source={require('../../assets/ic_question.jpg')} />
        </ImageContainer>

          <OverlayButton
            marginLeft={10}
            icon={require("../../assets/ic_add_circle.png")}
            onPress={() => Actions.addCard({ decKey: decKey }) } />

          <OverlayButton
            icon={require("../../assets/ic_play_game.png")}
            onPress={() => Actions.quizView({ decKey: decKey }) } />

      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  decks: state.decks[ownProps.decKey]
})

export default connect(mapStateToProps)(DeckView);

const ImageContainer = styled.View`
  flex: 3;
  justifyContent: center;
  alignItems: center;
`;

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
