require("dotenv").config();

import { AppDataSource } from "./database/data-source";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);

    app.use(cors());
    app.use(express.json());
    app.use(routes);

    app.listen(process.env.PORT || 8080, () => {
      console.log("Server started on port 8080!");
    });
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });
