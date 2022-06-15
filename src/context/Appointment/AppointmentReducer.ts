import { AppointmentState } from "../../interfaces/Appointment/appointment";

type AppointmentAction =
  | { type: "addPatientData"; payload: AppointmentState }
  | { type: "addMedicData"; payload: AppointmentState }
  | {
      type: "addAppointmentData";
      payload: AppointmentState;
    };

//aca iria las llamadas a la api y se cambia el state?

export const appointmentReducer = (
  state: AppointmentState,
  action: AppointmentAction
) => {
  switch (action.type) {
    case "addPatientData":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastNameF: action.payload.lastNameF,
        lastNameM: action.payload.lastNameM,
        documentType: action.payload.documentType,
        document: action.payload.document,
        birthday: action.payload.birthday,
        sex: action.payload.sex,
        phoneNumber: action.payload.phoneNumber,
      };
    case "addMedicData":
      return {
        ...state,
        medicId: action.payload.medicId,
      };
    case "addAppointmentData":
      return {
        ...state,
        patientId: action.payload.patientId,
        appointmentType: action.payload.appointmentType,
        date: action.payload.date,
      };
    default:
      return state;
  }
};
