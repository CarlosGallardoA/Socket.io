import { config } from "dotenv";
config();
export default {
  mongodbURL: process.env.DATABASE_URI || "mongodb://localhost/crud-socketio",
  port: process.env.PORT || 5000,
};
