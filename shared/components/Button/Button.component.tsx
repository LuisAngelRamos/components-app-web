import React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle, StyleProp } from 'react-native';
import Text from '../Text/Text.component';
import { styles } from './Button.styles';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  disabled = false,
  style,
  textStyle,
  ...props 
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        style
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      {...props}
    >
      <Text style={[
        styles.buttonText, 
        variant === 'outline' && styles.outlineText,
        textStyle
      ]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

