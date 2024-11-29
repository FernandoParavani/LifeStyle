import React, { useState, useEffect } from 'react';
import { View, Text, Animated, Easing, Image } from 'react-native';
import { style } from '../components/Input/stylesRelaxScreen'; 
import Logo from '../assets/Logo.png'; // Verifique o caminho correto

export default function RelaxationScreen() {
  const [step, setStep] = useState("Inspire");
  const [animationValue] = useState(new Animated.Value(1));

  useEffect(() => {
    // Alterna entre inspire e expire a cada 4 segundos
    const interval = setInterval(() => {
      setStep(prevStep => (prevStep === "Inspire" ? "Expire" : "Inspire"));
    }, 4000);

    // Animação de expansão e contração (respiração)
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 1.5,
          duration: 4000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 4000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => clearInterval(interval);
  }, [animationValue]);

  return (
    <View style={[style.containerRelax, { backgroundColor: 'white' }]}>
      {/* Logotipo */}
      <View style={style.logoContainer}>
        <Image
          source={Logo}
          style={style.logo}
          onError={(error) => console.log("Image Load Error:", error.nativeEvent)}
        />
      </View>

      {/* Título */}
      <Text style={style.textTitle}>Momento para se acalmar!</Text>

      {/* Círculo animado */}
      <View style={style.circleContainer}>
        <Animated.View
          style={[
            style.circle,
            {
              transform: [{ scale: animationValue }],
              backgroundColor: '#0B3B60', // Corrigido para cor válida
            },
          ]}
        />
      </View>

      {/* Texto de instrução (Inspire/Expire) */}
      <Text style={style.textInstruction}>{step}</Text>
    </View>
  );
}
