import React, { Component } from 'react';
import styled from 'styled-components';

export default class TouchableOpacityCustom extends Component {
  render() {
    const { backgroundColor, color, onPress, title } = this.props;

    return (
      <TouchableOpacity style={{ backgroundColor: `${backgroundColor}` }} onPress={() => onPress()}>
        <Text style={{ color: `${color}` }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const TouchableOpacity = styled.TouchableOpacity`
  paddingTop: 10;
  paddingBottom: 10;
  borderRadius: 35;
  justifyContent: center;
  alignItems: center;
  elevation: 2;
  opacity: 1;
`;

const Text = styled.Text`
  textAlign: center;
  fontSize: 18;
  fontWeight: bold;
`;
