import { Document } from "mongoose";

export interface shortUrlInterface extends Document {
  shortID: string;
  destination: string;
}
