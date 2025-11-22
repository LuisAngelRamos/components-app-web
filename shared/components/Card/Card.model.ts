import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

export interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

