import { createContext } from "react";
import { AppointmentState } from "../../interfaces/Appointment/appointment";

export type AppointmentContextProps = {
  appointmentState: AppointmentState;
  addAppointmentType: (appointmentType: string) => void;
  addSpecialityData: (specialityId: string) => void;
  addMedicData: (medicId: string) => void;
  addAppointmentDate: (date: Date) => void;
  addPatientData: (
    patientId: string,
    firstName: string,
    lastNameF: string,
    lastNameM: string,
    documentType: string,
    document: string,
    birthday: Date,
    sex: string,
    phoneNumber: string
  ) => void;
  changePage: (page: number) => void;
};

export const AppointmentContext = createContext<AppointmentContextProps>(
  {} as AppointmentContextProps
);
