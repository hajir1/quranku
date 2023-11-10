import config from "../config/config.js";

const endpoints = [
  {
    path: `${config.BASE_URL}/surahs`,
    description: "get all surah: /surahs",
  },
  {
    path: `${config.BASE_URL}/surahs/112`,
    description:
      "get spesifict surah using number surah in quran (1 - 114): /surahs/{numberSurah}",
  },
  {
    path: `${config.BASE_URL}/surahs/112/ayahs`,
    description:
      "get all ayah from spesifict surah: /surahs/{numberSurah}/ayahs",
  },
  {
    path: `${config.BASE_URL}/surahs/112/ayahs/2`,
    description:
      "get spesifict ayah from spesifict surah: /surahs/{numberSurah}/ayahs/{numberAyah}",
  },
  {
    path: `${config.BASE_URL}/random`,
    description: "get random ayah: /random",
  },
];

export const HomeController = (req, res) => {
  res.json({
    endpoints
  });
};
