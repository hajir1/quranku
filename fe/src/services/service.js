import axios from "axios";

export const getAlQuranSurah = async () => {
  const response = await fetch("https://api.alquran.cloud/v1/surah");
  if (!response.ok) {
    throw new Error("Gagal mengambil data");
  }
  return response.json();
};
export const getAlQuranSurahSearch = (id, callback) => {
  axios
    .get(`http://api.alquran.cloud/v1/surah/${id}/en.asad`)
    .then((res) => callback(res.data.data))
    .catch((err) => callback(err.code));
};

export const getAlQuranSurahDetail = async (id) => {
  const response = await fetch(`https://quranku-alpha.vercel.app/surahs/${id}`);
  if (!response.ok) {
    throw new Error("gagal mengambil data");
  }
  return response.json();
};
export const getAlQuranSurahById = (idSurah, idAyah, callback) => {
  axios
    .get(`https://quranku-alpha.vercel.app/surahs/${idSurah}/ayahs/${idAyah}`)
    .then((res) => callback(res.data))
    .catch((err) => callback(err.code));
};
export const getAlQuranSurahByIdSearch = (idSurah, idAyah, callback) => {
  axios
    .get(`https://quranku-alpha.vercel.app/surahs/${idSurah}/ayahs/${idAyah}`)
    .then((res) => callback(res.data))
    .catch((err) => callback(err.code));
};

export const getAllAsmaulHusna = async () => {
  const response = await fetch(`https://quranku-alpha.vercel.app/dzikir/asmaulHusna`);
  if (!response.ok) {
    throw new Error("gagal mengambil data");
  }
  return response.json();
};
export const getAsmaulHusnaSearch = (id, callback) => {
  axios
    .get(`https://quranku-alpha.vercel.app/dzikir/asmaulHusna/${id}`)
    .then((res) => callback(res))
    .catch((err) => callback(err));
};
export const getAllDoa = async () => {
  const response = await fetch(`https://quranku-alpha.vercel.app/doa`);
  if (!response.status === true) {
    throw new Error("gagal mengambil data");
  }
  return response.json();
};
export const getDzikirAfterSholat = async () => {
  const response = await fetch(`https://quranku-alpha.vercel.app/dzikir`);
  return response.json();
};
export const getDzikirpagi = async () => {
  const response = await fetch(`https://quranku-alpha.vercel.app/dzikir/dzikirpagi`);
  return response.json();
};
export const getDzikirsore = async () => {
  const response = await fetch(`https://quranku-alpha.vercel.app/dzikir/dzikirsore`);
  return response.json();
};
