import sequelize from "./databases/database.js";
import express from 'express';
import route from "./routes/routes.js"

const app = express();

app.use(express.json());

app.use("/", route);

const port = 4000;
sequelize.sync({alter: true})
.then(() =>{
    console.log("Database synced");
    app.listen(port, () => {
        console.log(`server is listening at http://localhost:${port}`)
    });
})
.catch((error) =>{
    console.error("Failed to sync database: ", error);
});