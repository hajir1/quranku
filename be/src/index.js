import app from "./app.js"
import config from "./config/config.js"
import logger from "./config/logger.js"

const server = app.listen(config.PORT, (req,res) => {
  logger.info(`server is running on port ${config.PORT}`);
  res.send("running")
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
