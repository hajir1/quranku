/* eslint-disable no-unused-vars */
import axios from "axios";
// surah
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
  const response = await fetch(`http://localhost:3005/surahs/${id}`);
  if (!response.ok) {
    throw new Error("gagal mengambil data");
  }
  return response.json();
};
export const ApiAlQuranSurahById = (idSurah, idAyah, callback) => {
  axios
    .get(`http://localhost:3005/surahs/${idSurah}/ayahs/${idAyah}`)
    .then((res) => callback(res.data))
    .catch((err) => callback(err));
};
export const ApiAlQuranSurahByIdSearch = (idSurah, idAyah, callback) => {
  axios
    .get(`http://localhost:3005/surahs/${idSurah}/ayahs/${idAyah}`)
    .then((res) => callback(res.data))
    .catch((err) => callback(err));
};
