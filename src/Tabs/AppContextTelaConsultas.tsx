import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Appointment {
  id: string;
  serviceName: string;
  date: string;
  time: string;
  professionalName: string;
  professionalPhoto: string;
  isFuture: boolean;
}

interface AppContextProps {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
}

export const AppContext = createContext<AppContextProps>({
  appointments: [],
  addAppointment: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const storedAppointments = await AsyncStorage.getItem("appointments");
      if (storedAppointments) {
        const parsedAppointments = JSON.parse(storedAppointments);
        setAppointments(parsedAppointments);
        console.log("Agendamentos carregados:", parsedAppointments); // Verifica o carregamento
        
      }
    } catch (error) {
      console.error("Erro ao carregar os agendamentos:", error);
    }
  };

  const addAppointment = async (appointment: Appointment) => {
    try {
      const updatedAppointments = [...appointments, appointment];
      setAppointments(updatedAppointments);
      await AsyncStorage.setItem(
        "appointments",
        JSON.stringify(updatedAppointments)
      );
      console.log("Agendamento salvo:", updatedAppointments); // Verifica o salvamento
    } catch (error) {
      console.error("Erro ao salvar o agendamento:", error);
    }
  };

  return (
    <AppContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppContext.Provider>
  );
};


