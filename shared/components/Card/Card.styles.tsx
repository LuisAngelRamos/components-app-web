import { StyleSheet } from 'react-native';
import { colorTokens } from '../../design-system';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colorTokens.Background_Primary,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 8,
  },
});
