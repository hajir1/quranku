import dotenv from "dotenv"
import path from "path"
import yup from "yup"

dotenv.config({ path: path.resolve(".env") });

const envVarsSchema = yup
  .object()
  .shape({
    NODE_ENV: yup
      .string()
      .oneOf(["production", "development", "test"]),
    PORT: yup.number().default(3005),
    BASE_URL: yup.string().default("http://localhost:3005"),
  })
  .noUnknown();

const getConfig = () => {
  try {
    return envVarsSchema.validateSync(process.env);
  } catch (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }
};

export default getConfig();
