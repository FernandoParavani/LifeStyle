import React from "react";
import { VStack, Text, HStack, Avatar, Button } from "native-base";

interface CardConsultaProps {
  nome: string;
  especialidade: string;
  foto: string;
  onPress: () => void; // Evento ao clicar no botão de agendamento
}

export const CardConsulta: React.FC<CardConsultaProps> = ({
  nome,
  especialidade,
  foto,
  onPress,
}) => {
  return (
    <HStack
      w="100%"
      bgColor="white"
      borderRadius="lg"
      shadow="1"
      p={3}
      alignItems="center"
      justifyContent="space-between"
      mb={3}
    >
      {/* Foto e detalhes do serviço */}
      <HStack alignItems="center">
        <Avatar source={{ uri: foto }} size="md" />
        <VStack ml={3}>
          <Text fontSize="md" fontWeight="bold" color="gray.700">
            {nome}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {especialidade}
          </Text>
        </VStack>
      </HStack>

      {/* Botão de Agendamento */}
      <Button onPress={onPress} colorScheme="blue">
        Agendar
      </Button>
    </HStack>
  );
};
