import express from "express"
import homeRoute from "./home.route.js"
import randomRoute from "./random.route.js"
import surahsRoute from "./surahs.route.js";

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
];

routes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router