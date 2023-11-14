const { doaService } = require("../services");

const getDoaContoller = (req, res) => {
  const result = doaService.getDoa();
  return res.send(result);
};
const getDoaByIdContoller = (req, res) => {
  const number = req.params.id;
  const result = doaService.getDoaById(number);
  return res.send(result);
};

const getDzikirController = (req, res) => {
  const result = doaService.getDzikir();
  return res.send(result);
};
const getDzikirSoreController = (req, res) => {
  const result = doaService.getDzikirSore();
  return res.send(result);
};
const getDzikirPagiController = (req, res) => {
  const result = doaService.getDzikirPagi();
  return res.send(result);
};
const getAsmaulHusnaController = (req, res) => {
  const result = doaService.getAsmaulHusna();
  return res.send(result);
};
const getAsmaulHusnaByIdController = (req, res) => {
  const number = req.params.id;
  const result = doaService.getAsmaulHusnaById(number);
  return res.send(result);
};
module.exports = {
  getAsmaulHusnaByIdController,
  getAsmaulHusnaController,
  getDzikirPagiController,
  getDzikirSoreController,
  getDzikirController,
  getDoaContoller,
  getDoaByIdContoller,
};
