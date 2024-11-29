import React, { useState } from "react";
import { VStack, Image, Box, Button, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "./assets/Logo.png";
import { EntradaTexto } from "./componentes/EntradaTexto";

export default function Login({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState(""); // Estado para o email
  const [password, setPassword] = useState(""); // Estado para a senha

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" px={5} bg="white">
      {/* Imagem de Logo */}
      <Image source={Logo} alt="Logo LifeStyle" mb={5} size="2xl" resizeMode="contain" />

      {/* Título */}
      <Text fontSize="xl" fontWeight="bold" mb={5}>
        Faça o login em sua conta
      </Text>

      {/* Campos de entrada */}
      <Box w="100%" mb={5}>
        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </Box>

      {/* Botão de login */}
      <Button
        onPress={() => navigation.navigate("Tabs")}
        w="100%"
        bg="blue.500"
        _text={{ color: "white" }}
      >
        Entrar
      </Button>

      {/* Link para recuperação de senha */}
      <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")} style={{ marginTop: 10 }}>
        <Text color="blue.500" underline>
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>

      {/* Link para cadastro */}
      <Box flexDirection="row" mt={5}>
        <Text>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text color="blue.500" underline>
            Cadastre-se!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}