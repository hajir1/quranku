import {
  getListSurahs,
  getSurah,
  getAyahs,
  getAyah,
} from "../services/quran.service.js";

const getSurahsController = (req, res) => {
  const listSurahs = getListSurahs();
  return res.send(listSurahs);
};

const getSurahController = (req, res) => {
  const { surahNumber } = req.params;
  const surah = getSurah(surahNumber);
  return res.send(surah);
};

const getAyahsController = (req, res) => {
  const { surahNumber } = req.params;
  const ayahs = getAyahs(surahNumber);
  return res.send(ayahs);
};

const getAyahController = (req, res) => {
  const { surahNumber, ayahNumber } = req.params;
  const surah = getAyah(surahNumber, ayahNumber);
  return res.send(surah);
};

export { getSurahsController, getSurahController, getAyahsController, getAyahController };
