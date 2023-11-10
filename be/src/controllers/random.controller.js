import { getRandomSurah } from "../services/quran.service.js";

export const RandomController = (req, res) => {
  const randomSurah = getRandomSurah();
  return res.send(randomSurah);
  // const surah = quran[getRandomInt(1, 114) - 1];
  // const ayah = surah.ayahs[getRandomInt(1, surah.ayahs.length) - 1];
  // res.json(responseJson(ayah, "random ayah was retrieved successfully", true));
};

