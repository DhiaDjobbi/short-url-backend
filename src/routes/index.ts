import { Express, Request, Response } from "express";
import { generateURL, redirectURL } from "../controllers/shortURL.controller";
import { generateURLValidation } from "../middlewares/validators/generateURL.validation";

const routes = (app: Express) => {
  app.post("/api/url", generateURLValidation, generateURL);
  app.get("/:shortID", redirectURL);
};

export default routes;
