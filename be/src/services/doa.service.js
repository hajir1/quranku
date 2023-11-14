import doaDoa from "../data/doa-doa.json" assert { type: "json" };
import dzikirAfterSholat from "../data/dzikir.json" assert { type: "json" };
import dzikirSore from "../data/dzikirsore.json" assert { type: "json" };
import dzikirPagi from "../data/dzikirpagi.json" assert { type: "json" };
import asmaulHusna from "../data/asmaulhusna.json" assert { type: "json" };
import ApiError from "../utils/ApiError.js";

export const getDoa = () => {
  return doaDoa.map((item) => item);
};
export const getDoaById = (doaNumber) => {
  const number = doaDoa[Number(doaNumber) - 1]
  if (!number) {
    throw new ApiError(400, "not found");
  }
  return number
};

export const getDzikir = () => {
  return dzikirAfterSholat.map((item) => item);
};
export const getDzikirSore = () => {
  return dzikirSore.map((item) => item);
};
export const getDzikirPagi = () => {
  return dzikirPagi.map((item) => item);
};
export const getAsmaulHusna = () => {
  return asmaulHusna.map((item) => item);
};

  export const getAsmaulHusnaById = (asmaNumber) => {
    const number = asmaulHusna[Number(asmaNumber) - 1]
    if (!number) {
      throw new ApiError(httpStatus.NOT_FOUND, "not found");
    }
    return number
  };