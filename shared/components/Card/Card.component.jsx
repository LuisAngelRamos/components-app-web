import React from 'react';
import { View } from 'react-native';
import { styles } from './Card.styles';

const Card = ({ 
  children, 
  style,
  ...props 
}) => {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

export default Card;

