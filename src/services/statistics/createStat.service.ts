import Statistics from "../../models/statistics.model";
import { Types } from 'mongoose';

const createStatService = async (shortUrl: Types.ObjectId, ip: String) => {
  try {
    const createdStat = await Statistics.create({ shortUrl, ip });
    return { status: "success", data: createdStat };
  } catch (error) {
    if (error instanceof Error) {
      return { status: "error", message: error.message };
    }
  }
};
export default createStatService;
