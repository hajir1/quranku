import httpStatus from "http-status";
import quran from "../data/quran.json" assert {type :"json"}
import ApiError from "../utils/ApiError.js";
import { getRandomInt } from "../utils/utility.js";

const getListSurahs = () => {
  return quran.map(({ ayahs, bismillah, ...rest }) => rest);
};

const getSurah = (surahNumber) => {
  const surah = quran[Number(surahNumber) - 1];

  if (!surah) {
    throw new ApiError(httpStatus.NOT_FOUND, "not found");
  }

  return surah;
};

const getAyahs = (surahNumber) => {
  const ayahs = quran[Number(surahNumber) - 1]?.ayahs;

  if (!ayahs) {
    throw new ApiError(httpStatus.NOT_FOUND, "not found");
  }

  return ayahs;
};

const getAyah = (surahNumber, ayahNumber) => {
  const ayah = quran[Number(surahNumber) - 1]?.ayahs[Number(ayahNumber) - 1];

  if (!ayah) {
    throw new ApiError(httpStatus.NOT_FOUND, "not found");
  }

  return ayah;
};

const getRandomSurah = () => {
  const surah = quran[getRandomInt(1, 114) - 1];
  return surah.ayahs[getRandomInt(1, surah.ayahs.length) - 1];
};

export { getListSurahs, getSurah, getAyahs, getAyah, getRandomSurah };
