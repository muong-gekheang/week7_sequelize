import express from "express";
import controllers from "./routes/route.js";
import sequelize from '../src/database/database.js';

const app = express();

app.use(express.json());

app.use("/author", controllers);

const port = 4000;
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database synced");
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to sync database:", error);
  });


