import { ViewStyle, StyleProp } from 'react-native';

export type StatusBadgeCategory = 'delayed' | 'early' | 'onTime' | 'canceled';

export interface StatusBadgeProps {
  label: string;
  category: StatusBadgeCategory;
  style?: StyleProp<ViewStyle>;
}
