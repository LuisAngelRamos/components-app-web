import { StyleSheet } from 'react-native';
import { colorTokens } from '../../design-system';

export const styles = StyleSheet.create({
  base: {
    color: '#000000',
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    color: colorTokens.Text_Secondary,
  },
});

