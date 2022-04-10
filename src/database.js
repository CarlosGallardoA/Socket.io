import mongoose from "mongoose";
import config from "./config";
(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL);
    console.log(`Connected to ${db.connection.name}`);
  } catch (err) {
    console.log(err);
  }
})();
