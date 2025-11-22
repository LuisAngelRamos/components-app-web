import React from 'react';
import { TextStyle, StyleProp } from 'react-native';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

export interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  style?: StyleProp<TextStyle>;
}

