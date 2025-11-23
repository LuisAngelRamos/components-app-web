import { ViewStyle, StyleProp } from 'react-native';
import { StatusBadgeCategory } from '../StatusBadge/StatusBadge.model';

export interface CardFlightProps {
  flightNumber: string;
  status?: string;
  statusLabel?: string;
  statusCategory?: StatusBadgeCategory;
  originCity: string;
  originTime: string;
  originAirport: string;
  originTerminal?: string;
  destinationCity: string;
  destinationTime: string;
  destinationAirport: string;
  duration?: string;
  onAddToWatchlist?: () => void;
  onViewDetails?: () => void;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  showFooter?: boolean;
  addToWatchlistLabel?: string;
  detailsLabel?: string;
  style?: StyleProp<ViewStyle>;
}
