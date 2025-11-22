import React from 'react';
import { View, TouchableOpacity, ViewStyle, StyleProp } from 'react-native';
import Text from '../Text/Text.component';
import { styles } from './CardFlight.styles';

interface CardFlightProps {
  // Información del vuelo
  flightNumber: string;
  status?: string;
  statusLabel?: string;
  
  // Origen
  originCity: string;
  originTime: string;
  originAirport: string;
  originTerminal?: string;
  
  // Destino
  destinationCity: string;
  destinationTime: string;
  destinationAirport: string;
  
  // Duración
  duration?: string;
  
  // Acciones
  onAddToWatchlist?: () => void;
  onViewDetails?: () => void;
  
  // Personalización
  backgroundColor?: string;
  textColor?: string;
  statusBackgroundColor?: string;
  accentColor?: string;
  
  // Footer personalizado
  showFooter?: boolean;
  addToWatchlistLabel?: string;
  detailsLabel?: string;
  
  // Estilos personalizados
  style?: StyleProp<ViewStyle>;
}

const CardFlight: React.FC<CardFlightProps> = ({
  flightNumber,
  status,
  statusLabel,
  originCity,
  originTime,
  originAirport,
  originTerminal,
  destinationCity,
  destinationTime,
  destinationAirport,
  duration,
  onAddToWatchlist,
  onViewDetails,
  backgroundColor = '#1A1F3A',
  textColor = '#FFFFFF',
  statusBackgroundColor = '#4A5568',
  accentColor = '#FFFFFF',
  showFooter = true,
  addToWatchlistLabel = 'Add to Watchlist',
  detailsLabel = 'Details',
  style,
}) => {
  return (
    <View style={[styles.card, { backgroundColor }, style]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.flightInfo}>
          <Text style={[styles.airplaneIcon, { color: textColor }]}>✈</Text>
          <View style={styles.flightNumberSpacer} />
          <Text style={[styles.flightNumber, { color: textColor }]}>
            {flightNumber}
          </Text>
        </View>
        {status && (
          <View style={[styles.statusBadge, { backgroundColor: statusBackgroundColor }]}>
            <Text style={[styles.statusText, { color: textColor }]}>
              {statusLabel || status}
            </Text>
          </View>
        )}
      </View>

      {/* Flight Details */}
      <View style={styles.details}>
        <View style={styles.detailsContainer}>
          {/* Origen */}
          <View style={styles.location}>
            <Text style={[styles.city, { color: textColor }]}>
              {originCity}
            </Text>
            <Text style={[styles.time, { color: textColor }]}>
              {originTime}
            </Text>
            <Text style={[styles.airport, { color: textColor }]}>
              {originAirport} {originTerminal ? `T${originTerminal}` : ''}
            </Text>
          </View>

          {/* Flight Path */}
          <View style={styles.pathContainer}>
            <View style={styles.pathLineWrapper}>
              <View style={[styles.pathLine, { backgroundColor: textColor }]} />
              <View style={[styles.pathDot, { backgroundColor: textColor }]} />
              <Text style={[styles.pathAirplane, { color: textColor }]}>✈</Text>
            </View>
            {duration && (
              <Text style={[styles.duration, { color: textColor }]}>
                {duration}
              </Text>
            )}
          </View>

          {/* Destino */}
          <View style={[styles.location, styles.locationRight]}>
            <Text style={[styles.city, styles.textRight, { color: textColor }]}>
              {destinationCity}
            </Text>
            <Text style={[styles.time, styles.textRight, { color: textColor }]}>
              {destinationTime}
            </Text>
            <Text style={[styles.airport, styles.textRight, { color: textColor }]}>
              {destinationAirport}
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      {showFooter && (
        <View style={styles.footer}>
          {onAddToWatchlist && (
            <TouchableOpacity
              style={styles.footerAction}
              onPress={onAddToWatchlist}
              activeOpacity={0.7}
            >
              <Text style={[styles.footerIcon, { color: accentColor }]}>+</Text>
              <View style={styles.footerActionSpacer} />
              <Text style={[styles.footerText, { color: accentColor }]}>
                {addToWatchlistLabel}
              </Text>
            </TouchableOpacity>
          )}
          {onViewDetails && (
            <TouchableOpacity
              style={styles.footerAction}
              onPress={onViewDetails}
              activeOpacity={0.7}
            >
              <Text style={[styles.footerText, styles.footerTextUnderline, { color: accentColor }]}>
                {detailsLabel}
              </Text>
              <Text style={[styles.footerArrow, { color: accentColor }]}>›</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default CardFlight;

