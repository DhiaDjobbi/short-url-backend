import express from "express";
import config from "config";
import routes from "./routes";
import bodyParser from "body-parser";
import db from "./db";

const app = express();
app.use(bodyParser.json());
const port = config.get("port");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  db();
  routes(app);
});
