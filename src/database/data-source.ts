import "reflect-metadata";
import { DataSource } from "typeorm";
import { Contact } from "./entity/Contact";
import { Person } from "./entity/Person";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [Person, Contact],
  migrations: [],
  subscribers: [],
});
