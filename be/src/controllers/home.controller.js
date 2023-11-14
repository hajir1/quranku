const config = require("../config/config");

const endpoints = [
  {
    path: `https://quranku-alpha.vercel.app/surahs`,
    description: "get all surah: /surahs",
  },
  {
    path: `https://quranku-alpha.vercel.app/surahs/1`,
    description:
      "get spesifict surah using number surah in quran (1 - 114): /surahs/{numberSurah}",
  },
  {
    path: `https://quranku-alpha.vercel.app/surahs/1/ayahs`,
    description:
      "get all ayah from spesifict surah: /surahs/{numberSurah}/ayahs",
  },
  {
    path: `https://quranku-alpha.vercel.app/surahs/1/ayahs/2`,
    description:
      "get spesifict ayah from spesifict surah: /surahs/{numberSurah}/ayahs/{numberAyah}",
  },
  {
    path: `https://quranku-alpha.vercel.app/random`,
    description: "get random ayah: /random",
  },
  {
    path: `https://quranku-alpha.vercel.app/doa`,
    description: "get all doa doa",
  },
  {
    path: `https://quranku-alpha.vercel.app/doa/1`,
    description: "get spesifict doa by id /doa/{1}",
  },
  {
    path: `https://quranku-alpha.vercel.app/dzikir`,
    description: "get all dzikir after shalat",
  },
  {
    path: `https://quranku-alpha.vercel.app/dzikir/dzikirsore`,
    description: "get all dzikir sore",
  },
  {
    path: `https://quranku-alpha.vercel.app/dzikir/dzikirsore`,
    description: "get all dzikir pagi",
  },
  {
    path: `https://quranku-alpha.vercel.app/dzikir/asmaulHusna`,
    description: "get all asmaul Husna",
  },
  {
    path: `https://quranku-alpha.vercel.app/dzikir/asmaulHusna/1`,
    description: "get asmaul Husna by id /dzikir/asmaulHusna/{1}",
  },
];

module.exports= HomeController = (req, res) => {
  res.json({
    endpoints,
  });
};
