import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Alert, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert('¡Hola!', 'Estás probando tu app en Expo 😎');
  };

  // Ejemplo: función para enviar mensaje a n8n/Discord
  const sendToN8n = async () => {
    try {
      await fetch('https://fandastic.app.n8n.cloud/webhook-test/2deca4e9-8a1e-42e4-a1db-0ac9702c3267', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: 'bauti',
          action: 'pressed_button',
        }),
      });
      Alert.alert('✅ Mensaje dasdasdas a n8n');
    } catch (err) {
      Alert.alert('❌ Error al conectar con n8n:', String(err));
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        ¡Hola Mundo desde Expo + TypeScript!
      </ThemedText>
      <ThemedText type="subtitle" style={styles.subtitle}>
        Tu app se actualiza automáticamente en tu celular 📱
      </ThemedText>
      <Button title="o Cambioooo estilo 😄" onPress={handlePress} />
      {/* Botón de ejemplo para enviar mensaje a n8n/Discord */}
      <Button title="Enviar a Discord (n8n)" onPress={sendToN8n} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E8F0F2',
  },
  title: {
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
});
