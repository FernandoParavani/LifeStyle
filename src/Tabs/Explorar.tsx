import React, { useState } from "react";
import { VStack, Box, ScrollView } from "native-base";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "../componentes/Botao";
import CardConsulta from "./CardConsulta";
import { Titulo } from "../componentes/Titulo";

export default function Explorar({ navigation }: { navigation: any }) {
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [services, setServices] = useState([
    {
      id: 1,
      nome: "Dr. Juan",
      especialidade: "Psicólogo",
      descricao: "Especialista em terapia cognitivo-comportamental.",
      localizacao: "São Paulo - SP",
      avaliacao: 4.8,
      foto: "https://github.com/FernandoParavani.png",
    },
    {
      id: 2,
      nome: "Dr. Silva",
      especialidade: "Dentista",
      descricao: "Experiência em odontologia estética e implantes dentários.",
      localizacao: "Rio de Janeiro - RJ",
      avaliacao: 4.7,
      foto: "https://github.com/FernandoParavani.png",
    },
    {
      id: 3,
      nome: "Dr. Oliveira",
      especialidade: "Cardiologista",
      descricao: "Atua no diagnóstico e tratamento de doenças cardiovasculares.",
      localizacao: "Belo Horizonte - MG",
      avaliacao: 4.9,
      foto: "https://github.com/FernandoParavani.png",
    },
  ]);

  const [filteredServices, setFilteredServices] = useState(services);

  // Filtrar serviços pela especialidade
  const handleSearch = () => {
    const filtered = services.filter((service) =>
      service.especialidade.toLowerCase().includes(specialty.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  // Navegar para a tela de perfil
  const handleNavigateToProfile = (service: any) => {
    navigation.navigate("PerfilParceiro", { service });
  };

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} mt={20} alignItems="flex-start" justifyContent="flex-start" p={5}>
        {/* Campos de busca */}
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite a especialidade"
            value={specialty}
            onChangeText={setSpecialty}
          />
          <EntradaTexto
            placeholder="Digite sua localização"
            value={location}
            onChangeText={setLocation}
          />
          <Botao mt={3} mb={3} bg="blue.500" _text={{ color: "white" }} onPress={handleSearch}>
            Buscar
          </Botao>
        </Box>

        {/* Resultados da busca */}
        <Titulo color="blue.500" alignSelf="center">
          Resultado da Busca
        </Titulo>
        {filteredServices.map((service) => (
          <VStack
            flex={1}
            mt={5}
            w="100%"
            alignItems="flex-start"
            bgColor="white"
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
        ))}
      </VStack>
    </ScrollView>
  );
}
