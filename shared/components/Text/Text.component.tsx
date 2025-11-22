import React from 'react';
import { Text as RNText, TextStyle, StyleProp } from 'react-native';
import { styles } from './Text.styles';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body', 
  style,
  ...props 
}) => {
  return (
    <RNText style={[styles.base, styles[variant], style]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;

