import axios from "../../services/axios";
import { useAuth } from "./useAuth";
import { REFRESH_URL } from "../../constants/server_uris";

const useRefreshToken = () => {
  const { refreshToken } = useAuth();

  //refreca token
  const refresh = async () => {
    const response = await axios.get(REFRESH_URL, {
      withCredentials: true, //indica que va a haber cookies
    });

    //accessToken antes de refrescar
    //console.log("prev accessToken", accessToken);

    //cambiamos el state (valor de accessToken)
    refreshToken(response.data.accessToken);
    //accessToken luego de refrescar
    //console.log("new accessToken", response.data.accessToken);

    return response.data.accessToken; //regresamos el token para usarlo en nuestra request
  };

  return {
    refresh,
  };
};

export default useRefreshToken;