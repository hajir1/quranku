const express = require("express");
const homeRoute = require("./home.route");
const randomRoute = require("./random.route");
const surahsRoute = require("./surahs.route");
const doaRoute = require("./doa.route");
const dzikirRoute = require("./dzikir.route");
const kisahNabiRoute = require("./kisah.route");

const router = express.Router();

const routes = [
  {
    path: "/",
    route: homeRoute,
  },
  {
    path: "/surahs",
    route: surahsRoute,
  },
  {
    path: "/random",
    route: randomRoute,
  },
  {
    path: "/doa",
    route: doaRoute,
  },
  {
    path: "/dzikir",
    route: dzikirRoute,
  },
  {
    path: "/kisahnabi",
    route: kisahNabiRoute,
  },
];

routes.forEach(({ path, route }) => {
  router.use(path, route);
});

module.exports = router;
