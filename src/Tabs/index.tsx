import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "./Principal";
import Consulta from "./Consulta";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Perfil from "./Perfil";
import Explorar from "./Explorar";
import PerfilParceiro from "./PerfilParceiro"; // Import da tela PerfilParceiro


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851",
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#FFF",
};

// Configuração do Tab Navigator
const tabs = [
  {
    name: "Principal",
    component: Principal,
    icon: "home",
  },
  {
    name: "Consulta",
    component: Consulta,
    icon: "calendar",
  },
  {
    name: "Explorar",
    component: Explorar,
    icon: "search",
  },
  {
    name: "Perfil",
    component: Perfil,
    icon: "person",
  },
];

// Stack Navigator para a tela de PerfilParceiro
function ExplorarStack() {
  return (
    <Stack.Navigator>
      {/* Tela Explorar */}
      <Stack.Screen
        name="Explorar"
        component={Explorar}
        options={{ headerShown: false }}
      />
      {/* Tela PerfilParceiro */}
      <Stack.Screen
        name="PerfilParceiro"
        component={PerfilParceiro}
        options={{
          title: "Perfil do Parceiro", // Título na barra de navegação
        }}
      />
    </Stack.Navigator>
  );
}

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.name === "Explorar" ? ExplorarStack : tab.component} // Usa o Stack Navigator para a aba Explorar
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
