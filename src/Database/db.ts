import { Sequelize } from "sequelize";
import { DB_PASSWORD, DB_SCHEMA, DB_USER_NAME } from "../config/env";

const sequelize: Sequelize = new Sequelize(DB_SCHEMA, DB_USER_NAME, DB_PASSWORD, {
  host: "127.0.0.1",
  dialect: "mysql",
});



export default sequelize;
