import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
  upcomingAppointments: { serviceName: string; date: string }[];
  addAppointment: (appointment: { serviceName: string; date: string }) => void;
}

// Criação do contexto
export const AppContext = createContext<AppContextProps>({
  upcomingAppointments: [],
  addAppointment: () => {},
});

// Tipo para o provedor
interface AppProviderProps {
  children: ReactNode; // Declaração correta do tipo de children
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [upcomingAppointments, setUpcomingAppointments] = useState<
    { serviceName: string; date: string }[]
  >([]);

  const addAppointment = (appointment: { serviceName: string; date: string }) => {
    setUpcomingAppointments([...upcomingAppointments, appointment]);
  };

  return (
    <AppContext.Provider value={{ upcomingAppointments, addAppointment }}>
      {children}
    </AppContext.Provider>
  );
};
