import React, { useState, useContext } from "react";
import { VStack, Box, ScrollView, Modal, Text } from "native-base";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "./CardConsulta";
import { EntradaTexto } from "./EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AppContext } from "./AppContext";

export default function Explorar() {
  const { addAppointment } = useContext(AppContext); // Contexto para salvar consultas
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [services, setServices] = useState([
    { id: 1, nome: "Dr. Juan", especialidade: "Psicólogo", foto: "https://github.com/FernandoParavani.png" },
    { id: 2, nome: "Dr. Silva", especialidade: "Dentista", foto: "https://github.com/FernandoParavani.png" },
    { id: 3, nome: "Dr. Oliveira", especialidade: "Cardiologista", foto: "https://github.com/FernandoParavani.png" },
  ]);
  const [filteredServices, setFilteredServices] = useState(services); // Serviços filtrados
  const [selectedService, setSelectedService] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Filtrar serviços pela especialidade
  const handleSearch = () => {
    const filtered = services.filter((service) =>
      service.especialidade.toLowerCase().includes(specialty.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  // Função para agendar consulta
  const handleSchedule = () => {
    if (selectedService) {
      addAppointment({
        serviceName: `${selectedService.nome} - ${selectedService.especialidade}`,
        date: selectedDate.toLocaleDateString(),
      });
      setModalVisible(false);
      alert(`Consulta agendada com ${selectedService.nome} em ${selectedDate.toLocaleDateString()}`);
    }
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
          <VStack flex={1} mt={5}  w="100%" alignItems="flex-start" bgColor="white" key={service.id}>
            <CardConsulta
              especialidade={service.especialidade}
              foto={service.foto}
              nome={service.nome}
              onPress={() => {
                setSelectedService(service);
                setModalVisible(true);
              }}
            />
          </VStack>
        ))}
      </VStack>

      {/* Modal para seleção de data */}
      <Modal isOpen={isModalVisible} onClose={() => setModalVisible(false)} avoidKeyboard>
  <VStack
    bg="white"
    p={6}
    borderRadius="lg"
    width="90%"
    alignSelf="center"
    shadow={2}
    alignItems="center"
  >
    {/* Título do Modal */}
    <Text fontSize="lg" fontWeight="bold" mb={4}>
      Agendar Consulta
    </Text>

    {/* Campo de Nome */}
    <EntradaTexto
      placeholder="Nome do Profissional"
      value={selectedService?.nome || ""}
      editable={false} // Campo somente leitura
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        width: "100%",
        marginBottom: 16,
      }}
    />

    {/* Campo de Especialidade */}
    <EntradaTexto
      placeholder="Especialidade"
      value={selectedService?.especialidade || ""}
      editable={false} // Campo somente leitura
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        width: "100%",
        marginBottom: 16,
      }}
    />

    {/* Campo de Seleção de Data */}
    <EntradaTexto
      placeholder="Selecione a Data"
      value={selectedDate.toLocaleDateString()}
      editable={false} // Campo somente leitura
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        width: "100%",
        marginBottom: 16,
        textAlign: "center",
      }}
    />
    <Botao
      onPress={() => setShowDatePicker(true)}
      mb={3}
      bg="blue.500"
      _text={{ color: "white" }}
    >
      Selecionar Data
    </Botao>
    {showDatePicker && (
      <DateTimePicker
        value={selectedDate}
        mode="date"
        display="default"
        onChange={(event, date) => {
          setShowDatePicker(false);
          if (date) setSelectedDate(date);
        }}
      />
    )}

    {/* Botões Salvar e Cancelar */}
    <VStack space={3} w="100%" alignItems="center">
      <Botao
        onPress={handleSchedule}
        bg="blue.500"
        _text={{ color: "white" }}
        w="80%"
        style={{ borderRadius: 8, paddingVertical: 10 }}
      >
        Salvar
      </Botao>
      <Botao
        onPress={() => setModalVisible(false)}
        bg="red.500"
        _text={{ color: "white" }}
        w="80%"
        style={{ borderRadius: 8, paddingVertical: 10 }}
      >
        Cancelar
      </Botao>
    </VStack>
  </VStack>
</Modal>



    </ScrollView>
  );
}
