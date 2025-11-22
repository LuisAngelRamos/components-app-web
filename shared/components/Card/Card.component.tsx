import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { styles } from './Card.styles';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

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

