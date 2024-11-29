import React, { createContext, useState, ReactNode } from "react";

// Estrutura dos dados de agendamento
interface Appointment {
  id: string;
  serviceName: string;
  date: string;
  time: string;
  professionalName: string;
  professionalPhoto: string;
  isFuture: boolean;
}

// Estrutura do contexto
interface AppContextProps {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
}

// Criação do contexto
export const AppContext = createContext<AppContextProps>({
  appointments: [],
  addAppointment: () => {},
});

// Provedor do contexto
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (appointment: Appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  return (
    <AppContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppContext.Provider>
  );
};
