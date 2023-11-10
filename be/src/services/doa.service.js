import doaDoa from "../data/doa-doa.json" assert { type: "json" };
import httpStatus from "http-status";
import ApiError from "../utils/ApiError.js";

export const getDoa = () => {
  return doaDoa.map((item) => item);
};
