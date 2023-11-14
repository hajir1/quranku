const config = require("../config/config");

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
  {
    path: `${config.BASE_URL}/doa`,
    description: "get all doa doa",
  },
  {
    path: `${config.BASE_URL}/doa/1`,
    description: "get spesifict doa by id /doa/{1}",
  },
  {
    path: `${config.BASE_URL}/dzikir`,
    description: "get all dzikir after shalat",
  },
  {
    path: `${config.BASE_URL}/dzikir/dzikirsore`,
    description: "get all dzikir sore",
  },
  {
    path: `${config.BASE_URL}/dzikir/dzikirpagi`,
    description: "get all dzikir pagi",
  },
  {
    path: `${config.BASE_URL}/dzikir/asmaulHusna`,
    description: "get all asmaul Husna",
  },
  {
    path: `${config.BASE_URL}/dzikir/asmaulHusna/1`,
    description: "get asmaul Husna by id /dzikir/asmaulHusna/{1}",
  },
];

module.exports= HomeController = (req, res) => {
  res.json({
    endpoints,
  });
};
