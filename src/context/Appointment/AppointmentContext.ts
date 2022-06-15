import { createContext } from "react";
import { AppointmentState } from "../../interfaces/Appointment/appointment";

export type AppointmentContextProps = {
  appointmentState: AppointmentState;
  addPatientData: (
    firstName: string,
    lastNameF: string,
    lastNameM: string,
    documentType: string,
    document: string,
    birthday: Date,
    sex: string,
    phoneNumber: string
  ) => void;
  addMedicData: (medicId: string) => void;
  addAppointmentData: (
    patientId: string,
    appointmentType: string,
    date: Date
  ) => void;
};

export const AppointmentContext = createContext<AppointmentContextProps>(
  {} as AppointmentContextProps
);
