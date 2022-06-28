import { APPOINTMENT_URL } from "../../constants/server_uris";
import axios from "../axios";

const createAppointment = async (
  patientId: string,
  medicId: string,
  date: Date,
  appointmentType: string
) => {
  const response = await axios.post(
    `${APPOINTMENT_URL}/patient/${patientId}/medic/${medicId}`,
    {
      date,
      appointmentType,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return response;
};

export { createAppointment };
