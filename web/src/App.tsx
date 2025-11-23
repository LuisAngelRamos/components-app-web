import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, CardFlight, Input, Text } from '@components-app/shared';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Por favor completa todos los campos');
      return;
    }
    setError('');
    alert(`Login con: ${email}`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text variant="h1">Componentes Compartidos</Text>
        <Text variant="body" style={styles.subtitle}>
          Estos componentes funcionan tanto en Web como en React Native
        </Text>
      </View>

      <Card style={styles.card}>
        <Text variant="h2">Botones</Text>
        <View style={styles.buttonGroup}>
          <Button 
            title="Primario" 
            variant="primary" 
            onPress={() => alert('Botón primario presionado')}
          />
          <Button 
            title="Secundario" 
            variant="secondary" 
            onPress={() => alert('Botón secundario presionado')}
          />
          <Button 
            title="Outline" 
            variant="outline" 
            onPress={() => alert('Botón outline presionado')}
          />
          <Button 
            title="Deshabilitado" 
            disabled 
            onPress={() => {}}
          />
        </View>
      </Card>

      <Card style={styles.card}>
        <Text variant="h2">Formulario de Login</Text>
        <Input
          label="Email"
          placeholder="tu@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label="Contraseña"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <Button 
          title="Iniciar Sesión" 
          onPress={handleLogin}
          style={styles.loginButton}
        />
      </Card>

      <Card style={styles.card}>
        <Text variant="h2">Tipografía</Text>
        <Text variant="h1">Título H1</Text>
        <Text variant="h2">Título H2</Text>
        <Text variant="h3">Título H3</Text>
        <Text variant="body">
          Este es un texto de cuerpo normal. Puede contener múltiples líneas
          y se ajusta automáticamente al contenedor.
        </Text>
        <Text variant="caption">Texto de caption más pequeño</Text>
      </Card>

      <View style={styles.cardFlightContainer}>
        <Text variant="h2" style={styles.cardFlightTitle}>Tarjeta de Vuelo</Text>
        <CardFlight
          flightNumber="AM 500"
          status="On Time"
          statusLabel="On Time"
          statusCategory="onTime"
          originCity="Mexico City"
          originTime="04:20a"
          originAirport="MEX"
          originTerminal="2"
          destinationCity="Cancun"
          destinationTime="08:00p"
          destinationAirport="CUN"
          duration="3h 40m"
          onAddToWatchlist={() => alert('Agregado a la lista de seguimiento')}
          onViewDetails={() => alert('Ver detalles del vuelo')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666666',
    marginTop: 8,
  },
  card: {
    marginBottom: 16,
  },
  buttonGroup: {
    gap: 12,
    marginTop: 16,
  },
  loginButton: {
    marginTop: 16,
  },
  error: {
    color: '#FF3B30',
    marginTop: 8,
    marginBottom: 8,
  },
  cardFlightContainer: {
    marginBottom: 16,
  },
  cardFlightTitle: {
    marginBottom: 16,
    marginLeft: 24,
    color: '#333333',
  },
});

export default App;

