import { LOGIN_URL, REGISTER_URL } from "../../constants/server_uris";
import axios from "../axios";

const loginService = async (email: string, password: string) => {
  const response = await axios.post(
    LOGIN_URL,
    {
      email,
      password,
    },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
  return response;
};

const registerService = async (
  email: string,
  password: string,
  firstName: string,
  lastNameF: string,
  lastNameM: string,
  document: string,
  documentType: string,
  birthday: Date,
  sex: string,
  phoneNumber: string
) => {
  const response = await axios.post(
    REGISTER_URL,
    {
      email,
      password,
      firstName,
      lastNameF,
      lastNameM,
      document,
      documentType,
      birthday,
      sex,
      phoneNumber,
    },
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );

  return response;
};

const logout = async () => {};

export { loginService, registerService, logout };
