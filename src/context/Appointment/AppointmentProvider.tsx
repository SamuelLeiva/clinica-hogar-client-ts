import { AppointmentState } from "../../interfaces/Appointment/appointment";
import { useEffect, useReducer } from "react";
import { appointmentReducer } from "./AppointmentReducer";
import { AppointmentContext } from "./AppointmentContext";

const INITIAL_STATE: AppointmentState = {
  // firstName: "",
  // lastNameF: "",
  // lastNameM: "",
  // documentType: "",
  // document: "",
  // birthday: new Date(),
  // sex: "",
  // phoneNumber: "",
  // medicId: "",
  // patientId: "",
  // appointmentType: "",
  // date: new Date(),
  // page: 0,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AppointmentProvider = ({ children }: props) => {
  const [appointmentState, dispatch] = useReducer(
    appointmentReducer,
    INITIAL_STATE,
    () => {
      const localData = localStorage.getItem("create-appointment-info");
      return localData ? JSON.parse(localData) : INITIAL_STATE;
    }
    //() => {
    //obtener cosas de local data o algo (ver AuthProvider)
    //}
  );

  useEffect(() => {
    localStorage.setItem(
      "create-appointment-info",
      JSON.stringify(appointmentState)
    );
  }, [appointmentState]);

  const addAppointmentType = (appointmentType: string) => {
    dispatch({ type: "addAppointmentType", payload: { appointmentType } });
  };

  const addSpecialityData = (specialityId: string) => {
    dispatch({ type: "addSpecialityData", payload: { specialityId } });
  };

  const addMedicData = (medicId: string) => {
    dispatch({ type: "addMedicData", payload: { medicId } });
  };

  const addAppointmentDate = (date: Date) => {
    dispatch({
      type: "addAppointmentDate",
      payload: { date },
    });
  };

  const addPatientData = (
    patientId: string,
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
        patientId,
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

  const changePage = (page: number) => {
    dispatch({
      type: "changePage",
      payload: { page },
    });
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointmentState,
        addAppointmentType,
        addSpecialityData,
        addMedicData,
        addAppointmentDate,
        addPatientData,
        changePage,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
