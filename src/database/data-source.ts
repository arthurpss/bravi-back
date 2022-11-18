import "reflect-metadata";
import { DataSource } from "typeorm";
import { Contact } from "./entity/Contact";
import { Person } from "./entity/Person";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "bravi",
  password: "bravipwd",
  database: "bravi",
  synchronize: true,
  logging: false,
  entities: [Person, Contact],
  migrations: [],
  subscribers: [],
});
