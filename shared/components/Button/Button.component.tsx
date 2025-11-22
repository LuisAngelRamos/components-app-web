import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../Text/Text.component';
import { styles } from './Button.styles';
import { ButtonProps } from './Button.model';

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

