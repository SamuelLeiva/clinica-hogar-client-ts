import { AppointmentState } from "../../interfaces/Appointment/appointment";
import { useReducer } from "react";
import { appointmentReducer } from "./AppointmentReducer";
import { AppointmentContext } from "./AppointmentContext";

const INITIAL_STATE: AppointmentState = {};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AppointmentProvider = ({ children }: props) => {
  const [appointmentState, dispatch] = useReducer(
    appointmentReducer,
    INITIAL_STATE
    //() => {
    //obtener cosas de local data o algo (ver AuthProvider)
    //}
  );

  const addPatientData = (
    firstName: string,
    lastNameF: string,
    lastNameM: string,
    documentType: string,
    document: string,
    birthday: Date,
    sex: string,
    phoneNumber: string
  ) => {
    dispatch({
      type: "addPatientData",
      payload: {
        firstName,
        lastNameF,
        lastNameM,
        documentType,
        document,
        birthday,
        sex,
        phoneNumber,
      },
    });
  };

  const addMedicData = (medicId: string) => {
    dispatch({ type: "addMedicData", payload: { medicId } });
  };

  const addAppointmentData = (
    patientId: string,
    appointmentType: string,
    date: Date
  ) => {
    dispatch({
      type: "addAppointmentData",
      payload: { patientId, appointmentType, date },
    });
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointmentState,
        addPatientData,
        addMedicData,
        addAppointmentData,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
