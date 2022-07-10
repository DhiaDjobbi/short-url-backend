import { Express, Request, Response } from "express";

const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    return res.send("Hello World!");
  });
};

export default routes;
