import { Request, Response } from "express";
import generateURLService from "../services/shortURL/generateURL.service";

export const generateURL = async (req: Request, res: Response) => {
  const { destination } = req.body;
  const createResult = await generateURLService(destination);
  let statusCode = 200;
  if (createResult?.status === "error") {
    statusCode = 400;
  }
  return res.status(statusCode).json(createResult);
};
