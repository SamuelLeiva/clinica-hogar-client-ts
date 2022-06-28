import { useContext } from "react";
import { AppointmentContext } from "../../context/Appointment/AppointmentContext";

export const useAppointmentCreation = () => {
  const {
    appointmentState,
    addAppointmentType,
    addSpecialityData,
    addMedicData,
    addAppointmentDate,
    addPatientData,
    changePage,
  } = useContext(AppointmentContext);
  const {
    firstName,
    lastNameF,
    lastNameM,
    documentType,
    document,
    birthday,
    sex,
    phoneNumber,
    specialityId,
    medicId,
    patientId,
    appointmentType,
    date,
    page,
  } = appointmentState;

  return {
    firstName,
    lastNameF,
    lastNameM,
    documentType,
    document,
    birthday,
    sex,
    phoneNumber,
    specialityId,
    medicId,
    patientId,
    appointmentType,
    date,
    page,
    addAppointmentType,
    addSpecialityData,
    addMedicData,
    addAppointmentDate,
    addPatientData,
    changePage,
  };
};
