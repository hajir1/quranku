/* eslint-disable no-unused-vars */
import axios from "axios";
// surah

const API_BASE_URL = "http://192.168.27.243:3005"
export const ApiAlQuranSurah = async () => {
  const response = await fetch("https://api.alquran.cloud/v1/surah");
  if (!response.ok) {
    throw new Error("Gagal mengambil data");
  }
  return response.json();
};
export const ApiAlQuranSurahSearch = (id, callback) => {
  axios
    .get(`http://api.alquran.cloud/v1/surah/${id}/en.asad`)
    .then((res) => callback(res.data.data))
    .catch((err) => callback(err));
};

export const ApiAlQuranSurahDetail = async (id) => {
  const response = await fetch(`${API_BASE_URL}/surahs/${id}`);
  if (!response.ok) {
    throw new Error("gagal mengambil data");
  }
  return response.json();
};
export const ApiAlQuranSurahById = (idSurah, idAyah, callback) => {
  axios
    .get(`${API_BASE_URL}/surahs/${idSurah}/ayahs/${idAyah}`)
    .then((res) => callback(res.data))
    .catch((err) => callback(err));
  };
export const ApiAlQuranSurahByIdSearch = (idSurah, idAyah, callback) => {
  axios
    .get(`${API_BASE_URL}/surahs/${idSurah}/ayahs/${idAyah}`)
    .then((res) => callback(res.data))
    .catch((err) => callback(err));
};

    export const ApiAllAsmaulHusna = async () => {
      const response = await fetch(`https://asmaul-husna-api.vercel.app/api/all`);
      if (!response.ok) {
        throw new Error("gagal mengambil data");
      }
      return response.json();
    };