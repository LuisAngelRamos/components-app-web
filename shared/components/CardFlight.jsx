import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';

const CardFlight = ({
  // Información del vuelo
  flightNumber,
  status,
  statusLabel,
  
  // Origen
  originCity,
  originTime,
  originAirport,
  originTerminal,
  
  // Destino
  destinationCity,
  destinationTime,
  destinationAirport,
  
  // Duración
  duration,
  
  // Acciones
  onAddToWatchlist,
  onViewDetails,
  
  // Personalización
  backgroundColor = '#1A1F3A',
  patternColor = '#2A2F4A',
  textColor = '#FFFFFF',
  statusBackgroundColor = '#4A5568',
  accentColor = '#FFFFFF',
  
  // Footer personalizado
  showFooter = true,
  addToWatchlistLabel = 'Add to Watchlist',
  detailsLabel = 'Details',
  
  // Estilos personalizados
  style,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: patternColor }, containerStyle]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 12,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    // Patrón diagonal simulado con gradiente (React Native no tiene patrones nativos)
    // En web, se puede mejorar con CSS
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  flightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  airplaneIcon: {
    fontSize: 20,
  },
  flightNumberSpacer: {
    width: 8,
  },
  flightNumber: {
    fontSize: 18,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  details: {
    width: '100%',
    marginBottom: 16,
  },
  detailsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  location: {
    flex: 1,
    justifyContent: 'space-between',
  },
  locationRight: {
    alignItems: 'flex-end',
  },
  textRight: {
    textAlign: 'right',
  },
  city: {
    fontSize: 14,
    fontWeight: '500',
  },
  time: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  airport: {
    fontSize: 12,
  },
  pathContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingTop: 24,
    minHeight: 60,
  },
  pathLineWrapper: {
    width: '100%',
    height: 20,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  pathLine: {
    width: '80%',
    height: 2,
  },
  pathDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    position: 'absolute',
    left: '10%',
    top: 9,
  },
  pathAirplane: {
    fontSize: 16,
    position: 'absolute',
    right: '10%',
    top: 2,
  },
  duration: {
    fontSize: 12,
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  footerAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerIcon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerActionSpacer: {
    width: 4,
  },
  footerText: {
    fontSize: 14,
  },
  footerTextUnderline: {
    textDecorationLine: 'underline',
  },
  footerArrow: {
    fontSize: 18,
    marginLeft: 4,
  },
});

export default CardFlight;

