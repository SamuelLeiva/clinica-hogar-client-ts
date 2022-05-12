import axios from "../api/axios";
import { REFRESH_URL } from "../constants/server_uris";
import { useAuth } from "./useAuth";

const useRefreshToken = () => {
  const { accessToken, refreshToken } = useAuth();

  //refreca token
  const refresh = async () => {
    const response = await axios.get(REFRESH_URL, {
      //withCredentials: true,  arreglar esto despues
    });

    //accessToken antes de refrescar
    console.log("prev accessToken", accessToken);

    refreshToken(response.data.accessToken);
    //accessToken luego de refrescar
    console.log("new accessToken", accessToken);

    return response.data.accessToken;
  };

  return {
    refresh,
  };
};

export default useRefreshToken;
