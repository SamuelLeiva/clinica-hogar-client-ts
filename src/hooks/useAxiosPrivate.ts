import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";
import { useAuth } from "./useAuth";
import useRefreshToken from "./useRefreshToken";

//it will attach the interceptors to this axios instance
const useAxiosPrivate = () => {
  const { refresh } = useRefreshToken();
  const { email, accessToken } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response, //if the response is good
      async (error) => { //if there is an error like jwt expired
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          //console.log("Antes de refresh");
          const newAccessToken = await refresh();
          //console.log("newAccessToken", newAccessToken);
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [email, accessToken, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
