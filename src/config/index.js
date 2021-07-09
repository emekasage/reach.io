import dotenv from "dotenv";

dotenv.config();

const env = process.env.NODE_ENV || "development";

let cache;

const config = () => {
  if (!cache) {
    cache = Object.freeze({
      env,
      apiHost: process.env.REACT_APP_API_URL || "",
      secrets: {},
    });
  }
  return cache;
};

export default config;