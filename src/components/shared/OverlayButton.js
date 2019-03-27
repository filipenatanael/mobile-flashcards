import React from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components';
import { Constants } from 'expo';

const { height, width } = Dimensions.get('window');

export default function({ onPress, icon, marginLeft }) {
  return (
    <OverlayButtonContainer style={{ marginLeft: marginLeft ? marginLeft : (width - 80) }}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}>
          <ImageStyled source={icon} />
      </TouchableOpacity>
    </OverlayButtonContainer>
  );
}

const ImageStyled = styled.Image`
  width: 55;
  height: 55;
`;

const OverlayButtonContainer = styled.View`
  flexDirection: column;
  position: absolute;
  marginTop: ${height - (7 * Constants.statusBarHeight)};
  opacity: 0.7;
`;
