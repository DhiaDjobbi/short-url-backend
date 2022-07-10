import mongoose from "mongoose";
import ShortURL from "../../models/shortURL.model";

const generateURLService = async (destination: String) => {
  try {
    const createdURL = await ShortURL.create({ destination });
    return { status: "success", data: createdURL };
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return { status: "error", message: error.message };
    }
  }
};
export default generateURLService;
