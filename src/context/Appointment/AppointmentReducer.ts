import { AppointmentState } from "../../interfaces/Appointment/appointment";

type AppointmentAction =
  | { type: "addAppointmentType"; payload: AppointmentState }
  | { type: "addSpecialityData"; payload: AppointmentState }
  | { type: "addMedicData"; payload: AppointmentState }
  | {
      type: "addAppointmentDate";
      payload: AppointmentState;
    }
  | { type: "addPatientData"; payload: AppointmentState }
  | { type: "changePage"; payload: AppointmentState };

//aca iria las llamadas a la api y se cambia el state?

export const appointmentReducer = (
  state: AppointmentState,
  action: AppointmentAction
) => {
  switch (action.type) {
    case "addAppointmentType":
      return {
        ...state,
        appointmentType: action.payload.appointmentType,
      };
    case "addSpecialityData":
      return {
        ...state,
        specialityId: action.payload.specialityId,
      };
    case "addMedicData":
      return {
        ...state,
        medicId: action.payload.medicId,
      };
    case "addAppointmentDate":
      return {
        ...state,
        date: action.payload.date,
      };
    case "addPatientData":
      return {
        ...state,
        patientId: action.payload.patientId,
        firstName: action.payload.firstName,
        lastNameF: action.payload.lastNameF,
        lastNameM: action.payload.lastNameM,
        documentType: action.payload.documentType,
        document: action.payload.document,
        birthday: action.payload.birthday,
        sex: action.payload.sex,
        phoneNumber: action.payload.phoneNumber,
      };
    case "changePage":
      return {
        ...state,
        page: action.payload.page,
      };
    default:
      return state;
  }
};
