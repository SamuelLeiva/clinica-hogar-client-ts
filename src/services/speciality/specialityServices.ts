import { SPECIALITY_URL } from "../../constants/server_uris";
import axios from "../axios";

const getSpecialities = async () => {
  const response = await axios.get(SPECIALITY_URL);

  return response;
};

export { getSpecialities };
