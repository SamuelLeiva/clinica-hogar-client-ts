import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAppointmentCreation } from "../../hooks/AppointmentCreation/useAppointmentCreation";
import { getMedic } from "../../services/medic/medicServices";
import { getSpeciality } from "../../services/speciality/specialityServices";
const ConfirmationAndPayment = () => {
  const {
    firstName,
    lastNameF,
    lastNameM,
    specialityId,
    medicId,
    appointmentType,
    date,
  } = useAppointmentCreation();

  const [medic, setMedic] = useState("");
  const [speciality, setSpeciality] = useState(null);

  const getData = async () => {
    const medicData = await getMedic(medicId);
    setMedic(
      `${medicData.firstName} ${medicData.lastNameF} ${medicData.lastNameM}`
    );
    console.log("medicData", medicData);
    const specData = await getSpeciality(specialityId);
    setSpeciality(specData.data);
    console.log("specData :>> ", specData);
  };

  const confirmAppointment = () => {};

  const cancelAppointment = () => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Card sx={{ maxWidth: 400, margin: "auto" }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
            Resumen de la cita
          </Typography>
          <Typography textAlign="left" sx={{ mb: 1.5 }} color="text.secondary">
            Médico: {medic}
          </Typography>
          <Typography textAlign="left" sx={{ mb: 1.5 }} color="text.secondary">
            Especialidad: {speciality && speciality.name}
          </Typography>
          <Typography textAlign="left" sx={{ mb: 1.5 }} color="text.secondary">
            Tipo de cita: {appointmentType}
          </Typography>
          <Typography textAlign="left" sx={{ mb: 1.5 }} color="text.secondary">
            Paciente: {`${firstName} ${lastNameF} ${lastNameM}`}
          </Typography>
          <Typography textAlign="left" sx={{ mb: 1.5 }} color="text.secondary">
            Costo: {speciality && `S/ ${speciality.appointmentCost}`}
          </Typography>
          <Typography textAlign="left" sx={{ mb: 1.5 }} color="text.secondary">
            Fecha:{" "}
            {`${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`}
          </Typography>
          <Typography textAlign="left" sx={{ mb: 1.5 }} color="text.secondary">
            Hora: {`${date.getHours()}:${date.getMinutes()}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              confirmAppointment();
            }}
          >
            Confirmar datos
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => {
              cancelAppointment();
            }}
          >
            Cancelar
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ConfirmationAndPayment;
