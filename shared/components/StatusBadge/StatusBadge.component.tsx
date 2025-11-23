import React from 'react';
import { View } from 'react-native';
import Text from '../Text/Text.component';
import { getHelperColor, colorTokens } from '../../design-system';
import { styles } from './StatusBadge.styles';
import { StatusBadgeProps, StatusBadgeCategory } from './StatusBadge.model';

const getCategoryColors = (category: StatusBadgeCategory): { backgroundColor: string; textColor: string } => {
  switch (category) {
    case 'delayed':
    case 'early':
      return {
        backgroundColor: getHelperColor('warning', 'primary'),
        textColor: colorTokens.Text_White,
      };
    case 'onTime':
      return {
        backgroundColor: getHelperColor('successBadge', 'primary'),
        textColor: colorTokens.Text_White,
      };
    case 'canceled':
      return {
        backgroundColor: getHelperColor('alertBadge', 'primary'),
        textColor: colorTokens.Text_White,
      };
    default:
      return {
        backgroundColor: getHelperColor('neutral', 'secondary'),
        textColor: colorTokens.Text_White,
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
