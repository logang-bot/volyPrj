import express, { Request, Response } from "express";
import morgan from "morgan";

import database from "./database";

class App {
  app: express.Application;
  port: number = 8000;
  constructor() {
    this.app = express();
    database();
    this.middlewares();
    this.routes();
    this.configuration();
  }

  configuration() {}

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use("/", (req: Request, res: Response) => {
      res.send("hello fellas");
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }
}

export default new App();
