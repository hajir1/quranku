import httpStatus from "http-status";
import { getDoa } from "../services/doa.service.js";

export const getDoaContoller = (req, res) => {
  const result = getDoa();
  return res.send(result);
};
