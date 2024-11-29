import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

interface InputProps {
  label?: string; // Label acima do campo de entrada
  placeholder: string; // Placeholder do campo
  secureTextEntry?: boolean; // Indica se é um campo de senha
  value: string; // Valor atual do campo
  onChangeText: (text: string) => void; // Função de callback para atualizar o valor
}

export function EntradaTexto({
  label,
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
}: InputProps): JSX.Element {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#aaa" // Cor do placeholder
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 8,
  },
});
