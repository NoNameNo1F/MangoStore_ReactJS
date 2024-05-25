import { apiResponse, jwtPayloadModel, userModel } from "../interfaces";
import { jwtDecode } from "jwt-decode";
const handleReceiveToken = (response: apiResponse) => {
  const token = response.data?.result?.token;
  localStorage.setItem("token", token as string);

  // handle decode to get role store
  const { fullName, id, email, role }: userModel = jwtDecode(token!);
  // using AuthSlice to config into store
};

export default handleReceiveToken;
