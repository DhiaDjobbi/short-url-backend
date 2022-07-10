import mongoose from "mongoose";
import ShortURL from "../../models/shortURL.model";

const findURLService = async (shortID: string) => {
  try {
    const shortURL = await ShortURL.findOne({ shortID });
    if (!shortURL) {
      return {
        status: "error",
        message: "Short URL not found",
      };
    }
    return { status: "success", data: shortURL };
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return { status: "error", message: error.message };
    }
  }
};
export default findURLService;
