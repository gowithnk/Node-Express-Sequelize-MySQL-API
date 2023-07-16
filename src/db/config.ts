import { Sequelize } from "sequelize-typescript";
import Models from "./models";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "todos",
  logging: false,
  models: Models,
});

export default connection;