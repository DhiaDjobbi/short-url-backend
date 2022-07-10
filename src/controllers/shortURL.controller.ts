import { Request, Response } from "express";
import generateURLService from "../services/shortURL/generateURL.service";
import findURLService from "../services/shortURL/findURL.service";
import createStatService from "../services/statistics/createStat.service";
import findByUrlAndIPService from "../services/statistics/findByUrlAndIP.service";

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
  // Find the short URL in DB
  const { shortID } = req.params;
  const findUrlResult = await findURLService(shortID);
  if (findUrlResult?.status === "error") {
    return res.status(400).json(findUrlResult);
  }
  if (findUrlResult?.data) {
    // Get the IP address of the user
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    if (ip) {
      const urlID = findUrlResult.data._id;
      // Check if the user has already visited the URL
      const findByUrlAndIPResult = await findByUrlAndIPService(urlID, ip.toString() );
      if (findByUrlAndIPResult?.message === "Not found") {
        // If the user has not visited the URL, create a new statistic
        const createStatResult = await createStatService(urlID, ip.toString());
        if (createStatResult?.status === "error") {
          return res.status(400).json(createStatResult);
        }
      }
    }
    return res.redirect(findUrlResult.data.destination);
  }
};
