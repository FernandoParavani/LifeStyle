import React, { useState, useContext } from "react";
import { VStack, Text, Box, Button, HStack, Icon, Select, CheckIcon, Image } from "native-base";
import { Linking } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AppContext } from "./AppContextTelaConsultas";

const generateId = () => Math.random().toString(36).substr(2, 9);

export default function PerfilParceiro({ route, navigation }: { route: any; navigation: any }) {
  const { service } = route.params;
  const { addAppointment } = useContext(AppContext);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const availableTimes = ["09:00", "10:00", "14:00", "15:00", "16:00"];

  const handleSchedule = () => {
    if (selectedTime) {
      const appointment = {
        id: generateId(),
        serviceName: service.nome,
        date: selectedDate.toLocaleDateString(),
        time: selectedTime,
        professionalName: service.nome,
        professionalPhoto: service.foto,
        isFuture: new Date(selectedDate) > new Date(),
      };

      addAppointment(appointment);

      alert(`Consulta agendada com ${service.nome} para ${selectedDate.toLocaleDateString()} às ${selectedTime}.`);
      navigation.navigate("Consulta");
    } else {
      alert("Por favor, selecione um horário.");
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "+551199999999";
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url).catch(() =>
      alert("Não foi possível abrir o WhatsApp. Certifique-se de que está instalado.")
    );
  };

  const openInstagram = () => {
    const instagramUrl = "https://instagram.com/profissional";
    Linking.openURL(instagramUrl).catch(() =>
      alert("Não foi possível abrir o Instagram.")
    );
  };

  return (
    <VStack flex={1} bgColor="white" alignItems="center" space={3} px={3} py={3}>
      {/* Ajuste na exibição da imagem para aceitar imagens locais */}
      <Image
        source={service.foto}
        alt="Foto do Profissional"
        style={{
          width: 120,
          height: 120,
          borderRadius: 60, // Tornar a imagem circular
        }}
        mb={3}
      />
      <Text fontSize="lg" fontWeight="bold">{service.nome}</Text>
      <Text fontSize="sm" color="gray.500">{service.especialidade}</Text>
      <Text fontSize="sm" color="gray.600" textAlign="center" lineHeight="18px">{service.descricao}</Text>
      <Box bg="blue.100" p={2} borderRadius="md" w="100%" alignItems="center">
        <Text fontSize="xs" color="blue.600">Localização: {service.localizacao}</Text>
        <Text fontSize="xs" color="blue.600">Avaliação: {service.avaliacao.toFixed(1)} ⭐</Text>
      </Box>

      <VStack w="100%" mt={2} space={2}>
        <Text fontSize="sm" fontWeight="bold">Agende uma consulta:</Text>
        <Button onPress={() => setShowDatePicker(true)} bg="blue.500" _text={{ color: "white", fontSize: "xs" }} mb={2}>
          Selecionar Data
        </Button>

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
        <Text fontSize="xs" color="blue.500">Data Selecionada: {selectedDate.toLocaleDateString()}</Text>

        <Select
          selectedValue={selectedTime}
          minWidth="200"
          accessibilityLabel="Selecione um horário"
          placeholder="Selecione um horário"
          _selectedItem={{ bg: "blue.500", endIcon: <CheckIcon size="4" /> }}
          onValueChange={(itemValue) => setSelectedTime(itemValue)}
        >
          {availableTimes.map((time, index) => (
            <Select.Item key={index} label={time} value={time} />
          ))}
        </Select>
        <Button onPress={handleSchedule} bg="blue.500" _text={{ color: "white", fontSize: "xs" }}>
          Confirmar Agendamento
        </Button>
      </VStack>

      <HStack space={3} mt={3}>
        <Button leftIcon={<Icon as={MaterialCommunityIcons} name="whatsapp" size="sm" color="white" />} bg="green.500" w="40%" _text={{ fontSize: "xs" }} onPress={openWhatsApp}>
          WhatsApp
        </Button>
        <Button leftIcon={<Icon as={FontAwesome} name="instagram" size="sm" color="white" />} bg="pink.500" w="40%" _text={{ fontSize: "xs" }} onPress={openInstagram}>
          Instagram
        </Button>
      </HStack>
    </VStack>
  );
}
