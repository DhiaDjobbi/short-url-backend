import { Express, Request, Response } from "express";
import { generateURL } from "../controllers/shortURL.controller";

const routes = (app: Express) => {
  app.post("/api/url", generateURL);
};

export default routes;
