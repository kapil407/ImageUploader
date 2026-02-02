import express from "express";
import cors from "cors";
import database from "./config/database.js";
import router from "./Routers/Router.js";
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",

    credentials: true,
  }),
);

app.use("/", router);

const port = 5500;

database()
  .then(() => {
    console.log("database is connected");
    app.listen(port, () => {
      console.log(`server is runing at ${port}`);
    });
  })
  .catch((error) => {
    console.log("database is not connected !!!!", error);
  });
