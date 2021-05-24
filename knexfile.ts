import { Config } from "src/config";

export default {
  ...Config.database[process.env.NODE_ENV || "develop"],
};
