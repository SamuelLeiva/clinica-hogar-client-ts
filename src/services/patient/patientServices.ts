import { PATIENT_URL } from "../../constants/server_uris";
import axios from "../axios";

const postPatient = async (
  firstName: string,
  lastNameF: string,
  lastNameM: string,
  documentType: string,
  document: string,
  birthday: string,
  sex: string,
  phoneNumber: string
) => {
  const response = await axios.post(
    PATIENT_URL,
    {
      firstName,
      lastNameF,
      lastNameM,
      documentType,
      document,
      birthday,
      sex,
      phoneNumber,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return response;
};

export { postPatient };
