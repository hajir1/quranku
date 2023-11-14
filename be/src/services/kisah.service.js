const kisahNabi = require("../data/kisahnabi.json");

const getSemuaKisah = () => {
  return kisahNabi.map((item) => item);
};
const getKisahById = (numberId) => {
  const kisah = kisahNabi[Number(numberId) - 1];
  if (!kisah) {
    throw new ApiError(httpStatus.NOT_FOUND, "not found");
  }

  return kisah;
};

module.exports = { getSemuaKisah ,getKisahById};
