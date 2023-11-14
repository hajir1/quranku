const doaDoa = require("../data/doa-doa.json");
const dzikirAfterSholat = require("../data/dzikir.json");
const dzikirSore = require("../data/dzikirsore.json");
const dzikirPagi = require("../data/dzikirpagi.json");
const asmaulHusna = require("../data/asmaulhusna.json");
const ApiError = require("../utils/ApiError");

const getDoa = () => {
  return doaDoa.map((item) => item);
};
const getDoaById = (doaNumber) => {
  const number = doaDoa[Number(doaNumber) - 1];
  if (!number) {
    throw new ApiError(400, "not found");
  }
  return number;
};

const getDzikir = () => {
  return dzikirAfterSholat.map((item) => item);
};
const getDzikirSore = () => {
  return dzikirSore.map((item) => item);
};
const getDzikirPagi = () => {
  return dzikirPagi.map((item) => item);
};
const getAsmaulHusna = () => {
  return asmaulHusna.map((item) => item);
};

const getAsmaulHusnaById = (asmaNumber) => {
  const number = asmaulHusna[Number(asmaNumber) - 1];
  if (!number) {
    throw new ApiError(httpStatus.NOT_FOUND, "not found");
  }
  return number;
};
module.exports = {
  getDoa,
  getDoaById,
  getDzikir,
  getDzikirPagi,
  getDzikirSore,
  getAsmaulHusna,
  getAsmaulHusnaById,
};
