import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://mongodb://127.0.0.1:27017/escuela"
export const PORT = process.env.PORT || 5000;
