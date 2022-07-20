import { MEDIC_URL } from "../../constants/server_uris";
import axios from "../axios";

const getMedic = async (id: string) => {
  const response = await axios.get(`${MEDIC_URL}/${id}`);

  return response.data;
};

export { getMedic };
