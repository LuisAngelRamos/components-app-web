import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../Text/Text.component';
import StatusBadge from '../StatusBadge/StatusBadge.component';
import { colorTokens } from '../../design-system';
import { styles } from './CardFlight.styles';
import { CardFlightProps } from './CardFlight.model';

const CardFlight: React.FC<CardFlightProps> = ({
  flightNumber,
  status,
  statusLabel,
  statusCategory = 'onTime',
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
  backgroundColor = colorTokens.Text_Primary,
  textColor = colorTokens.Text_White,
  accentColor = colorTokens.Text_White,
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
          <StatusBadge
            label={statusLabel || status}
            category={statusCategory}
          />
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

