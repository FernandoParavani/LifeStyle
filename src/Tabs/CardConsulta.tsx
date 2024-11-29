import React from "react";
import { VStack, Text, HStack, Image, Button } from "native-base";

interface CardConsultaProps {
  nome: string;
  especialidade: string;
  foto: any; // Alterado para aceitar imagens locais
  localizacao: string; // Localização do profissional
  avaliacao: number; // Avaliação do profissional
  descricao: string; // Descrição do profissional
  onPress: () => void; // Evento ao clicar no botão de navegação
}

const CardConsulta: React.FC<CardConsultaProps> = ({
  nome,
  especialidade,
  foto,
  localizacao,
  avaliacao,
  descricao,
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
        {/* Foto ajustada para aceitar imagens locais */}
        <Image
          source={foto}
          alt={`Foto de ${nome}`}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30, // Tornar a imagem circular
          }}
        />
        <VStack ml={3}>
          <Text fontSize="md" fontWeight="bold" color="gray.700">
            {nome}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {especialidade}
          </Text>
          <Text fontSize="xs" color="gray.400">
            {localizacao}
          </Text>
          <Text fontSize="xs" color="yellow.500">
            ⭐ {avaliacao.toFixed(1)}
          </Text>
        </VStack>
      </HStack>

      {/* Botão para ir ao perfil */}
      <Button onPress={onPress} colorScheme="blue">
        Ver Perfil
      </Button>
    </HStack>
  );
};

export default CardConsulta;
