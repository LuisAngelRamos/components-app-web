import React from 'react';
import { View } from 'react-native';
import Text from '../Text/Text.component';
import { styles } from './StatusBadge.styles';
import { StatusBadgeProps, StatusBadgeCategory } from './StatusBadge.model';

const getCategoryColors = (category: StatusBadgeCategory): { backgroundColor: string; textColor: string } => {
  switch (category) {
    case 'delayed':
    case 'early':
      return {
        backgroundColor: '#FFD700',
        textColor: '#FFFFFF',
      };
    case 'onTime':
      return {
        backgroundColor: '#10B981',
        textColor: '#FFFFFF',
      };
    case 'canceled':
      return {
        backgroundColor: '#EF4444',
        textColor: '#FFFFFF',
      };
    default:
      return {
        backgroundColor: '#4A5568',
        textColor: '#FFFFFF',
      };
  }
};

const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  category,
  style,
}) => {
  const { backgroundColor, textColor } = getCategoryColors(category);

  return (
    <View style={[styles.badge, { backgroundColor }, style]}>
      <Text style={[styles.text, { color: textColor }]}>
        {label}
      </Text>
    </View>
  );
};

export default StatusBadge;
