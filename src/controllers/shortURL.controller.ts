import { Request, Response } from "express";
import generateURLService from "../services/shortURL/generateURL.service";
import findURLService from "../services/shortURL/findURL.service";

export const generateURL = async (req: Request, res: Response) => {
  const { destination } = req.body;
  const createResult = await generateURLService(destination);
  let statusCode = 200;
  if (createResult?.status === "error") {
    statusCode = 400;
  }
  return res.status(statusCode).json(createResult);
};

export const redirectURL = async (req: Request, res: Response) => {
  const { shortID } = req.params;
  const findResult = await findURLService(shortID);
  if (findResult?.status === "error") {
    return res.status(400).json(findResult);
  }
  if (findResult?.data) {
    return res.redirect(findResult.data.destination);
  }
}
