import { StyleSheet } from 'react-native';
import { colorTokens } from '../../design-system';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  secondary: {
    backgroundColor: '#5856D6',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  outlineText: {
    color: '#007AFF',
  },
  disabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: colorTokens.Text_White,
    fontSize: 16,
    fontWeight: '600',
  },
});
