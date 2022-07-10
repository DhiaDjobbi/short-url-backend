import Statistics from "../../models/statistics.model";
import { Types } from "mongoose";

const findByUrlAndIPService = async (shortUrl: Types.ObjectId, ip: String) => {
  try {
    const findResult = await Statistics.findOne({ shortUrl, ip });
    if (findResult) {
      return { status: "success", data: findResult };
    }
    return { status: "error", message: "Not found" };
  } catch (error) {
    if (error instanceof Error) {
      return { status: "error", message: error.message };
    }
  }
};
export default findByUrlAndIPService;
