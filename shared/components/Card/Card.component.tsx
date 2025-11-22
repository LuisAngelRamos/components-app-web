import React from 'react';
import { View } from 'react-native';
import { styles } from './Card.styles';
import { CardProps } from './Card.model';

const Card: React.FC<CardProps> = ({ 
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

