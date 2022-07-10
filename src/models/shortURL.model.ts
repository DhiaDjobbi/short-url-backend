import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { shortUrlInterface } from "../interfaces/shortURL.interface";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6);

const shortURLSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      unique: true,
      required: true,
      default: nanoid()
    },
    destination: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);
const ShortURL = mongoose.model<shortUrlInterface>("ShortURL", shortURLSchema);

export default ShortURL;
