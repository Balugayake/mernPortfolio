import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/db.js";
import cloudinary from "cloudinary";
dotenv.config({ path: "./backend/config/config.env" });
connectDatabase();
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
