import {
  getAsmaulHusna,
  getAsmaulHusnaById,
  getDoa,
  getDoaById,
  getDzikir,
  getDzikirPagi,
  getDzikirSore,
} from "../services/doa.service.js";

export const getDoaContoller = (req, res) => {
  const result = getDoa();
  return res.send(result);
};
export const getDoaByIdContoller = (req, res) => {
  const number = req.params.id;
  const result = getDoaById(number);
  return res.send(result);
};

export const getDzikirController = (req, res) => {
  const result = getDzikir();
  return res.send(result);
};
export const getDzikirSoreController = (req, res) => {
  const result = getDzikirSore();
  return res.send(result);
};
export const getDzikirPagiController = (req, res) => {
  const result = getDzikirPagi();
  return res.send(result);
};
export const getAsmaulHusnaController = (req, res) => {
  const result = getAsmaulHusna();
  return res.send(result);
};
export const getAsmaulHusnaByIdController = (req, res) => {
  const number = req.params.id;
  const result = getAsmaulHusnaById(number);
  return res.send(result);
};
