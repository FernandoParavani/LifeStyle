import React, { useState } from "react";
import { Modal, Button, TextInput, TouchableOpacity } from "react-native";
import { NativeBaseProvider, VStack, Box, Text, Avatar, ScrollView, HStack } from "native-base";

const UserProfileScreen: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("Fernando Juan");
  const [birthDate, setBirthDate] = useState("17/07/1997");
  const [location, setLocation] = useState("São Paulo");
  const [interests, setInterests] = useState<string[]>([]); // Estado para os serviços de interesse
  const [newInterest, setNewInterest] = useState<string>(""); // Novo interesse adicionado pelo usuário

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addInterest = () => {
    if (newInterest.trim() !== "") {
      setInterests((prev) => [...prev, newInterest]);
      setNewInterest("");
    }
  };

  const removeInterest = (indexToRemove: number) => {
    setInterests((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const saveInfo = () => {
    setModalVisible(false);
    alert("Informações salvas!");
  };

  return (
    <NativeBaseProvider>
      <ScrollView flex={1} bg="gray.100">
        <VStack flex={1} mt={20} space={4} alignItems="center" px={4} py={6}>
          {/* Foto de Perfil */}
          <Avatar
            size="xl"
            source={{
              uri: "https://github.com/FernandoParavani.png",
            }}
            borderWidth={2}
            borderColor="blue.400"
          />
          <Text fontSize="2xl" fontWeight="bold">
            {name}
          </Text>

          {/* Informações Pessoais */}
          <Box
            bg="white"
            p={4}
            shadow={2}
            borderRadius="md"
            w="100%"
            onTouchEnd={toggleModal}
          >
            <Text fontSize="lg" color="blue.500" fontWeight="bold">
              Informações Pessoais
            </Text>
            <Text>Nome: {name}</Text>
            <Text>Data de Nascimento: {birthDate}</Text>
            <Text>Localização: {location}</Text>
            <Text mt={2} color="blue.400" textAlign="right">
              Toque para editar
            </Text>
          </Box>

          {/* Modal para Editar Informações */}
          <Modal visible={isModalVisible} animationType="slide" transparent={true}>
            <VStack flex={1} justifyContent="center" alignItems="center" bg="rgba(0,0,0,0.5)">
              <Box bg="white" p={6} borderRadius="lg" width="80%" alignItems="center">
                <Text fontSize="lg" fontWeight="bold" mb={4}>
                  Editar Informações
                </Text>
                <TextInput
                  style={{
                    width: "100%",
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 8,
                    borderRadius: 8,
                    marginBottom: 16,
                  }}
                  placeholder="Nome"
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  style={{
                    width: "100%",
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 8,
                    borderRadius: 8,
                    marginBottom: 16,
                  }}
                  placeholder="Data de Nascimento"
                  value={birthDate}
                  onChangeText={setBirthDate}
                />
                <TextInput
                  style={{
                    width: "100%",
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 8,
                    borderRadius: 8,
                    marginBottom: 16,
                  }}
                  placeholder="Localização"
                  value={location}
                  onChangeText={setLocation}
                />
                <Button title="Salvar" onPress={saveInfo} />
                <Button title="Cancelar" color="red" onPress={toggleModal} />
              </Box>
            </VStack>
          </Modal>

          {/* Histórico de Consultas */}
          <Box bg="white" p={4} shadow={2} borderRadius="md" w="100%">
            <Text fontSize="lg" color="blue.500" fontWeight="bold">
              Histórico de Exames
            </Text>
            <Text>- Nutricionista: 01/01/2024</Text>
            <Text>- Psicólogo: 15/02/2024</Text>
          </Box>

          {/* Serviços de Interesse */}
          <Box bg="white" p={4} shadow={2} borderRadius="md" w="100%">
            <Text fontSize="lg" color="blue.500" fontWeight="bold">
              Serviços de Interesse
            </Text>
            {/* Campo para adicionar novo interesse */}
            <VStack  space={3} mt={3}>
              <TextInput
                style={{
                  width: "100%",
                  borderWidth: 1,
                  borderColor: "#ddd",
                  borderRadius: 8,
                  padding: 8,
                }}
                placeholder="Adicionar serviço de interesse"
                value={newInterest}
                onChangeText={setNewInterest}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "#4F46E5",
                  borderRadius: 8,
                  padding: 10,
                  alignItems: "center",
                }}
                onPress={addInterest}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>Adicionar</Text>
              </TouchableOpacity>
            </VStack>
            {/* Lista de interesses */}
            {interests.length > 0 ? (
              interests.map((interest, index) => (
                <HStack
                  mt={3}  
                  key={index}
                  p={3}
                  bg="blue.100"
                  borderRadius="md"
                  mb={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="md" color="blue.700">
                    {interest}
                  </Text>
                  <TouchableOpacity
                    onPress={() => removeInterest(index)}
                    style={{
                      backgroundColor: "blue.700",
                      padding: 8,
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>Remover</Text>
                  </TouchableOpacity>
                </HStack>
              ))
            ) : (
              <Text fontSize="sm" color="gray.500" mt={3}>
                Nenhum serviço adicionado ainda.
              </Text>
            )}
          </Box>

          {/* Objetivos */}
          <Box bg="white" p={4} shadow={2} borderRadius="md" w="100%">
            <Text fontSize="lg" color="blue.500" fontWeight="bold">
              Objetivos
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 8,
                padding: 8,
                marginTop: 8,
                textAlignVertical: "top",
                height: 80,
              }}
              placeholder="Descreva seus objetivos ou uma bio aqui"
              multiline
            />
            <Button title="Salvar" onPress={() => alert("Objetivos salvos!")} />
          </Box>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default UserProfileScreen;
