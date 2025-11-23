import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
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

