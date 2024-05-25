export default interface jwtPayloadModel {
  fullname: string;
  id: string;
  email: string;
  role: string;
  nbf: number;
  exp: number;
  iat: number;
}
