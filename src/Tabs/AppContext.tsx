import React, { createContext, useState, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid"; // Para gerar IDs únicos

// Tipos de dados para consultas
interface Appointment {
  id: string; // Identificador único para cada consulta
  serviceName: string;
  especialidade: string;
  foto: string;
  date: string; // Data da consulta
  isFuture: boolean; // Define se a consulta é futura
}

// Interface do contexto
interface AppContextProps {
  upcomingAppointments: Appointment[]; // Consultas futuras
  pastAppointments: Appointment[]; // Consultas passadas
  addAppointment: (appointment: Omit<Appointment, "id" | "isFuture">) => void; // Adicionar consulta
  cancelAppointment: (id: string) => void; // Cancelar consulta
  rescheduleAppointment: (id: string, newDate: string) => void; // Remarcar consulta
}

// Criação do contexto com valores padrão
export const AppContext = createContext<AppContextProps>({
  upcomingAppointments: [],
  pastAppointments: [],
  addAppointment: () => {},
  cancelAppointment: () => {},
  rescheduleAppointment: () => {},
});

// Tipo para o provedor
interface AppProviderProps {
  children: ReactNode; // Declarar filhos
}

// Função para verificar se a consulta é futura
const isDateFuture = (date: string) => {
  const today = new Date();
  const appointmentDate = new Date(date);
  return appointmentDate >= today;
};

// Implementação do provedor de contexto
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Adicionar uma consulta
  const addAppointment = (appointment: Omit<Appointment, "id" | "isFuture">) => {
    const newAppointment: Appointment = {
      id: uuidv4(), // Gerar ID único
      ...appointment,
      isFuture: isDateFuture(appointment.date), // Verificar se a consulta é futura
    };
    setAppointments((prev) => [...prev, newAppointment]);
  };

  // Cancelar uma consulta
  const cancelAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
  };

  // Remarcar uma consulta
  const rescheduleAppointment = (id: string, newDate: string) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id
          ? { ...appointment, date: newDate, isFuture: isDateFuture(newDate) }
          : appointment
      )
    );
  };

  // Separar consultas futuras e passadas
  const upcomingAppointments = appointments.filter((appointment) => appointment.isFuture);
  const pastAppointments = appointments.filter((appointment) => !appointment.isFuture);

  return (
    <AppContext.Provider
      value={{
        upcomingAppointments,
        pastAppointments,
        addAppointment,
        cancelAppointment,
        rescheduleAppointment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
