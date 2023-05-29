import express from "express";
import { userRoutes } from "./routes/userRoutes";
import sequelize from "./Database/db";
import { PORT } from "./config/env";


sequelize
  .authenticate()
  .then(() => {
    console.log("Succesfully Connected to Database");
  })
  .catch((err: Error) => {
    console.log(err.message);
  });


const app = express();


app.get("/", (req, res) => {
  res.send("Hello World, I am using Typescript!");
});

app.use("/user", userRoutes);

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
