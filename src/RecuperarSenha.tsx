import React, { useState } from "react";
import {
  VStack,
  Image,
  Box,
  Button,
  Text,
} from "native-base";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Logo from "./assets/Logo.png";
import { EntradaTexto } from "./componentes/EntradaTexto";

export default function RecuperarSenha({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState(""); // Estado para o email

  const handlePasswordRecovery = () => {
    if (!email.trim()) {
      alert("Por favor, insira seu email.");
      return;
    }

    alert(`Email de recuperação enviado para: ${email}`);
    setEmail(""); // Limpa o campo de email após o envio
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined} // Ajusta para iOS e Android
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0} // Offset adicional para iOS
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled" // Fecha o teclado ao tocar fora
      >
        <VStack flex={1} alignItems="center" justifyContent="center" px={5} bg="white">
          {/* Imagem de Logo */}
          <Image
            source={Logo}
            alt="Logo LifeStyle"
            mb={5}
            size="2xl"
            resizeMode="contain"
          />

          {/* Título */}
          <Text fontSize="xl" fontWeight="bold" mb={5}>
            Recuperar Senha
          </Text>

          {/* Instruções */}
          <Box w="100%" mb={5}>
            <Text textAlign="center" color="gray.600" mb={4}>
              Insira o seu email registrado para receber instruções de redefinição de senha.
            </Text>
          </Box>

          {/* Campo de entrada de email */}
          <Box w="100%" mb={5}>
            <EntradaTexto
              label="Email"
              placeholder="Insira seu endereço de e-mail"
              value={email}
              onChangeText={setEmail}
            />
          </Box>

          {/* Botão de Enviar */}
          <Button
            onPress={handlePasswordRecovery}
            w="100%"
            bg="blue.500"
            _text={{ color: "white" }}
            mb={4}
          >
            Enviar
          </Button>

          {/* Botão de Voltar */}
          <Button
            onPress={() => navigation.goBack()}
            w="100%"
            bg="gray.200"
            _text={{ color: "black" }}
          >
            Cancelar
          </Button>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
