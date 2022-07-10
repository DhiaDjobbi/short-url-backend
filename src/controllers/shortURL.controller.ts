import { Request, Response } from "express";
import createURLService from "../services/shortURL/createURL.service";

export const generateURL = async (req: Request, res: Response) => {
  const { destination } = req.body;
  const createResult = await createURLService(destination);
  let statusCode = 200;
  if (createResult?.status === "error") {
    statusCode = 400;
  }
  return res.status(statusCode).json(createResult);
};
