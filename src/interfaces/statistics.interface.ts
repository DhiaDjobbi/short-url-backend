import { Document } from "mongoose";
import { shortUrlInterface } from "./shortURL.interface";

export interface statisticsInterface extends Document {
  shortUrl: shortUrlInterface;
}
