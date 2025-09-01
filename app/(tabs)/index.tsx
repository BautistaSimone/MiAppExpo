import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Alert, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert('¡Hola!', 'Estás probando tu app en Expo 😎');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        ¡Hola Mundo desde Expo + TypeScript!
      </ThemedText>
      <ThemedText type="subtitle" style={styles.subtitle}>
        Tu app se actualiza automáticamente en tu celular 📱
      </ThemedText>
      <Button title="Tócame 😄" onPress={handlePress} />
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
