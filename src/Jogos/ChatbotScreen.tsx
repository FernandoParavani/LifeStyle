import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Importando o GIF localmente
import ManutencaoGif from '../assets/manutencao.gif';

export default function ChatbotScreen() {
  return (
    <View style={styles.container}>
      {/* Exibição do GIF */}
      <Image
        source={ManutencaoGif} // Usando o GIF local
        style={styles.gif}
      />
      {/* Mensagem */}
      <Text style={styles.message}>Estamos Trabalhando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  gif: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});
