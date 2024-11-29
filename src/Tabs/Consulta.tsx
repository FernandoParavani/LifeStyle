import React, { useContext } from "react";
import { ScrollView, Box, Divider } from "native-base";
import { AppContext } from "./AppContextTelaConsultas";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";

export default function Consultas() {
  const { appointments } = useContext(AppContext);

  const upcomingAppointments = appointments.filter((app) => app.isFuture);
  const pastAppointments = appointments.filter((app) => !app.isFuture);

  return (
    <ScrollView p="5">
      <Titulo color="blue.500" fontSize="2xl" mb={4}>
        Minhas Consultas
      </Titulo>

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Próximas Consultas
      </Titulo>
      {upcomingAppointments.length > 0 ? (
        upcomingAppointments.map((appointment) => (
          <CardConsulta
            key={appointment.id}
            nome={appointment.professionalName}
            especialidade={appointment.serviceName}
            foto={appointment.professionalPhoto}
            data={`${appointment.date} às ${appointment.time}`}
            foiAgendado
          />
        ))
      ) : (
        <Box>
          <Titulo fontSize="sm" color="gray.500">
            Nenhuma consulta agendada.
          </Titulo>
        </Box>
      )}

      <Divider mt={5} />

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Consultas Passadas
      </Titulo>
      {pastAppointments.length > 0 ? (
        pastAppointments.map((appointment) => (
          <CardConsulta
            key={appointment.id}
            nome={appointment.professionalName}
            especialidade={appointment.serviceName}
            foto={appointment.professionalPhoto}
            data={`${appointment.date} às ${appointment.time}`}
            foiAtendido
          />
        ))
      ) : (
        <Box>
          <Titulo fontSize="sm" color="gray.500">
            Nenhuma consulta realizada.
          </Titulo>
        </Box>
      )}
    </ScrollView>
  );
}
