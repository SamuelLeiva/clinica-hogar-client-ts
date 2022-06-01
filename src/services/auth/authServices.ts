import {
  LOGIN_URL,
  LOGOUT_URL,
  REFRESH_URL,
  REGISTER_URL,
} from "../../constants/server_uris";
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

const logoutService = async () => {
  await axios(LOGOUT_URL, {
    withCredentials: true,
  });
};

const refreshTokenService = async () => {
  const response = await axios.get(REFRESH_URL, {
    withCredentials: true, //indica que va a haber cookies
  });
  return response;
};

export { loginService, registerService, logoutService, refreshTokenService };
