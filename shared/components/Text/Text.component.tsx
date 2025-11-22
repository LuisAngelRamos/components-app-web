import React from 'react';
import { Text as RNText } from 'react-native';
import { styles } from './Text.styles';
import { TextProps } from './Text.model';

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

