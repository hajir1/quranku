import express from "express"
import cors from "cors";
import httpStatus from "http-status";
import routes from "./routes/index.js"
import config from "./config/config.js"
import morgan,{successHandler,errorHandler as morganError} from "./config/morgan.js"
import ApiError from "./utils/ApiError.js"
import { errorConverter, errorHandler } from "./middlewares/error.js"

const app = express();

if (config.NODE_ENV !== "test") {
  app.use(successHandler);
  app.use(morganError);
}

app.use(express.json());

app.use(cors());

app.disable("x-powered-by");

app.use("/", routes);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.use(errorConverter);

app.use(errorHandler);

export default app
