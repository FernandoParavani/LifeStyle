import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "./Cadastro";
import Login from "./Login";
import Tabs from "./Tabs";
import Checklist from "./Jogos/checklistScreen";
import ReadingScreen from "./Jogos/readingScreen";
import BreathingExercise from "./Jogos/relaxScreen";
import RelaxationScreen from "./Jogos/relaxScreen";
import ChatbotSreen from "./Jogos/ChatbotScreen"
import RecuperarSenha from "./RecuperarSenha"; // Adicionado import para a tela de recuperação de senha
import ChatbotScreen from "./Jogos/ChatbotScreen";

const Tab = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RecuperarSenha" // Nome da nova rota
                    component={RecuperarSenha} // Tela de recuperação de senha
                    options={{ title: "Recuperar Senha", headerShown: true }} // Adicionado título
                />
                <Stack.Screen name="ChecklistScreen" component={Checklist} />
                <Stack.Screen name="RelaxationScreen" component={RelaxationScreen} />
                <Stack.Screen name="ReadingScreen" component={ReadingScreen} />
                <Stack.Screen name="ChatbotScreen" component={ChatbotScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
