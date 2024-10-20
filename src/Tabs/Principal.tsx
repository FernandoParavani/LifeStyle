import React from 'react';
import { VStack } from 'native-base';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import { style } from '../components/Input/stylesHomeScreen';
import Logo from '../assets/Logo.png';

// Função auxiliar para criar os botões
const renderButton = (iconName, iconType, label, onPress, iconSize = 24, iconColor = "white") => (
  <TouchableOpacity style={style.buttonMenu} onPress={onPress}>
    {iconType === 'FontAwesome' && <FontAwesome name={iconName} size={iconSize} color={iconColor} />}
    {iconType === 'MaterialIcons' && <MaterialIcons name={iconName} size={iconSize} color={iconColor} />}
    {iconType === 'Feather' && <Feather name={iconName} size={iconSize} color={iconColor} />}
    <Text style={style.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default function Principal({ navigation }: { navigation: any }) {
  return (
    <VStack flex={1} mt={20} style={style.containerMenu}>

      {/* Header com Logo no centro */}
      <VStack style={{ alignItems: 'center', marginBottom: 30 }}>
        <Image source={Logo} style={style.logo} />
      </VStack>

      {/* Buttons Section */}
      {renderButton('calendar', 'FontAwesome', 'Planejamento', () => navigation.navigate('ChecklistScreen'))}
      {renderButton('spa', 'MaterialIcons', 'Mindfulness', () => navigation.navigate('RelaxationScreen'))}
      {renderButton('book-open', 'Feather', 'Leitura', () => navigation.navigate('ReadingScreen'))}
      {renderButton('message-circle', 'Feather', 'Chatbot', () => navigation.navigate('ChatbotScreen'))}

      {/* Resumo da Ofensiva */}
      <VStack style={style.summarySection}>
        <Text style={style.summaryTitle}>Resumo da ofensiva</Text>
        <VStack style={style.summaryBoxContainer}>
          <VStack style={style.summaryBox}>
            <Text style={style.summaryText}>Semana</Text>
            <Text style={style.summaryNumber}>3</Text>
          </VStack>
          <VStack style={style.summaryBox}>
            <Text style={style.summaryText}>Dia</Text>
            <Text style={style.summaryNumber}>5</Text>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
}
