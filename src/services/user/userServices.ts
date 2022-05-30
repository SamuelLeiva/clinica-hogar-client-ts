import { MY_PROFILE_URL } from "../../constants/server_uris";
import { axiosPrivate } from "../axios";

const myProfileService = async (controller: AbortController) => {
  const response = await axiosPrivate.get(MY_PROFILE_URL, {
    signal: controller.signal,
  });
  return response;
};

export { myProfileService };
