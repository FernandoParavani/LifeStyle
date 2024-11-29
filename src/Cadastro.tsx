import { VStack, Image, Text, Box, Checkbox, ScrollView, Button } from "native-base";
import { useState } from "react";
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

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((item) => item !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      {/* Logo: Ajustado com margin top */}
      <Image
        source={Logo}
        alt="Logo LifeStyle"
        alignSelf="center"
        size="lg"
        mb={5} // Mantém um espaçamento abaixo
        mt={10} // Adiciona espaçamento acima para centralizar melhor
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
  );
}
