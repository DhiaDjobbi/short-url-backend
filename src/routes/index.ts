import { Express, Request, Response } from "express";
import { generateURL, redirectURL } from "../controllers/shortURL.controller";

const routes = (app: Express) => {
  app.post("/api/url", generateURL);
  app.get("/:shortID", redirectURL);
};

export default routes;
