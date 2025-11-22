import { ViewStyle, StyleProp } from 'react-native';

export interface CardFlightProps {
  flightNumber: string;
  status?: string;
  statusLabel?: string;
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
  statusBackgroundColor?: string;
  accentColor?: string;
  showFooter?: boolean;
  addToWatchlistLabel?: string;
  detailsLabel?: string;
  style?: StyleProp<ViewStyle>;
}
