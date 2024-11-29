import React, { useState } from "react";
import {
  VStack,
  Image,
  Text,
  Box,
  Checkbox,
  ScrollView,
  Button,
} from "native-base";
import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { secoes } from "./utils/CadastroEntradaTexto";
import Logo from "./assets/Logo.png";

export default function Cadastro({ navigation }: { navigation: any }) {
  const [numSecao, setNumSecao] = useState(0); // Controla a seção atual
  const [formData, setFormData] = useState<Record<string, string>>({}); // Armazena os dados do formulário
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]); // Armazena os objetivos selecionados

  const avancarSecao = () => {
    if (numSecao === 0) {
      if (!formData["Nome"] || !formData["Email"] || !formData["Crie uma senha"]) {
        alert("Por favor, preencha os campos Nome, Email e Senha.");
        return;
      }
    } else if (numSecao === 1) {
      if (!formData["CEP"] || !formData["Endereço"] || !formData["Número"] || !formData["Telefone"]) {
        alert("Por favor, preencha todos os campos obrigatórios (CEP, Endereço, Número e Telefone).");
        return;
      }
    }

    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    } else {
      alert("Cadastro concluído! Enviaremos um e-mail de confirmação.");
      navigation.navigate("Login");
    }
  };

  const voltarSecao = () => {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  };

  // Formata o valor do campo com base na necessidade
  const handleChange = (field: string, value: string) => {
    let formattedValue = value;

    if (field === "CEP") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d{1,3})/, "$1-$2")
        .substring(0, 9);
    } else if (field === "Telefone") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3")
        .substring(0, 15);
    } else if (field === "Endereço" || field === "Nome") {
      formattedValue = value.charAt(0).toUpperCase() + value.slice(1); // Converte a primeira letra para maiúscula
    }

    setFormData({ ...formData, [field]: formattedValue });
  };

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((item) => item !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={{ flex: 1, padding: 20, backgroundColor: "white" }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <Image
            source={Logo}
            alt="Logo LifeStyle"
            alignSelf="center"
            size="lg"
            mb={5}
            mt={10}
          />

          {/* Título da seção */}
          <Titulo fontSize="xl" mb={4}>
            {secoes[numSecao].titulo}
          </Titulo>

          {/* Campos de entrada */}
          <Box mb={5}>
            {secoes[numSecao]?.entradaTexto?.map((entrada) => (
              <EntradaTexto
                key={entrada.id}
                label={entrada.label}
                placeholder={entrada.placeholder}
                secureTextEntry={entrada.secureTextEntry}
                keyboardType={
                  entrada.label === "CEP" || entrada.label === "Telefone"
                    ? "numeric"
                    : "default"
                }
                value={formData[entrada.label] || ""}
                onChangeText={(value) => handleChange(entrada.label, value)}
              />
            ))}
          </Box>

          {/* Checkboxes (Objetivos na última seção) */}
          {numSecao === 2 && (
            <Box>
              <Text fontWeight="bold" mb={3}>
                Selecione seus objetivos:
              </Text>
              {secoes[numSecao]?.checkbox?.map((option) => (
                <Checkbox
                  key={option.id}
                  value={option.value}
                  isChecked={selectedGoals.includes(option.value)}
                  onChange={() => toggleGoal(option.value)}
                >
                  {option.value}
                </Checkbox>
              ))}
            </Box>
          )}

          {/* Botões de navegação */}
          <VStack space={3} mt={5}>
            {numSecao > 0 && (
              <Button onPress={voltarSecao} bg="gray.500" _text={{ color: "white" }}>
                Voltar
              </Button>
            )}
            <Button onPress={avancarSecao} bg="blue.500" _text={{ color: "white" }}>
              {numSecao < secoes.length - 1 ? "Avançar" : "Concluir"}
            </Button>
          </VStack>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
