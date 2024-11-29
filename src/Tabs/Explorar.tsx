import React, { useState } from "react";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { VStack, Box, FormControl, Input, Button, Text } from "native-base";
import CardConsulta from "./CardConsulta";
import { Titulo } from "../componentes/Titulo";

// Importação das imagens locais

import Medico1 from "../assets/medico1.png";
import Medico2 from "../assets/medico2.png";
import Medico3 from "../assets/medico3.png";

export default function Explorar({ navigation }: { navigation: any }) {
  const [specialty, setSpecialty] = useState(""); // Estado para especialidade
  const [location, setLocation] = useState(""); // Estado para localização
  const [services, setServices] = useState([
    {
      id: 1,
      nome: "Dr. Marcelo",
      especialidade: "Psicólogo",
      descricao: "Especialista em terapia cognitivo-comportamental.",
      localizacao: "São Paulo - SP",
      avaliacao: 4.8,
      foto: Medico1, // Substituído por imagem local
    },
    {
      id: 2,
      nome: "Dr. Silvia",
      especialidade: "Personal",
      descricao: "Experiência em odontologia estética e implantes dentários.",
      localizacao: "Rio de Janeiro - RJ",
      avaliacao: 4.7,
      foto: Medico2, // Substituído por imagem local
    },
    {
      id: 3,
      nome: "Dr. Oliveira",
      especialidade: "Nutricionista",
      descricao: "Atua no diagnóstico e tratamento de doenças cardiovasculares.",
      localizacao: "Belo Horizonte - MG",
      avaliacao: 4.9,
      foto: Medico3, // Substituído por imagem local
    },
  ]);

  const [filteredServices, setFilteredServices] = useState(services);

  const handleSearch = () => {
    if (!specialty.trim()) {
      setFilteredServices(services);
      return;
    }
    const filtered = services.filter((service) =>
      service.especialidade.toLowerCase().includes(specialty.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const handleNavigateToProfile = (service: any) => {
    navigation.navigate("PerfilParceiro", { service });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <VStack flex={1} mt={10} alignItems="center" p={5}>
          {/* Campos de busca */}
          <Box w="100%" p={5} bgColor="gray.100" borderRadius="lg" shadow="2">
            {/* Campo de Especialidade */}
            <FormControl mb={4}>
              <FormControl.Label>Especialidade</FormControl.Label>
              <Input
                placeholder="Digite a especialidade"
                value={specialty}
                onChangeText={setSpecialty}
                bg="white"
                borderRadius="md"
                _focus={{
                  borderColor: "blue.500",
                  bg: "gray.50",
                }}
              />
            </FormControl>

            {/* Campo de Localização */}
            <FormControl mb={4}>
              <FormControl.Label>Localização</FormControl.Label>
              <Input
                placeholder="Digite sua localização"
                value={location}
                onChangeText={setLocation}
                bg="white"
                borderRadius="md"
                _focus={{
                  borderColor: "blue.500",
                  bg: "gray.50",
                }}
              />
            </FormControl>

            {/* Botão de Busca */}
            <Button bg="blue.500" _text={{ color: "white" }} onPress={handleSearch}>
              Buscar
            </Button>
          </Box>

          {/* Resultados da busca */}
          <Titulo color="blue.500" alignSelf="center" mt={6}>
            Resultado da Busca
          </Titulo>
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <VStack
                flex={1}
                mt={5}
                w="100%"
                alignItems="center"
                key={service.id}
              >
                <CardConsulta
                  especialidade={service.especialidade}
                  foto={service.foto}
                  nome={service.nome}
                  localizacao={service.localizacao}
                  avaliacao={service.avaliacao}
                  descricao={service.descricao}
                  onPress={() => handleNavigateToProfile(service)}
                />
              </VStack>
            ))
          ) : (
            <Text mt={4} color="gray.600">
              Nenhum resultado encontrado.
            </Text>
          )}
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
