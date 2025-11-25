import React from 'react';
import { TextInput, View } from 'react-native';
import Text from '../Text/Text.component';
import { styles } from './Input.styles';

const Input = ({ 
  label,
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  style,
  ...props 
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#999999"
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;

