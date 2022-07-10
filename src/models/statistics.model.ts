import mongoose from "mongoose";
import { statisticsInterface } from "../interfaces/statistics.interface";


const shortURLSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShortURL",
      required: true
    },
    ip: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);
const Statistics = mongoose.model<statisticsInterface>("statistics", shortURLSchema, "statistics");

export default Statistics;
