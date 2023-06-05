import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import morgan from "morgan";
import sequelize from "./db_config/db_config.js";
import {AppRoute} from "./routes/AppRoutes.js";
import db_migrations from "./models/db_migraton.js"


const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan("dev"));

await app.listen(process.env.PORT || 8000, async () => {
    console.log(`SERVER IS RUNNING ON http://localhost:${process.env.PORT}`);
    await runDBSync();
});
app.use(new AppRoute().initAppRouts());

const runDBSync = async  ()=>{
    try {


       await sequelize.sync({alter: true});

    }
    catch (e) {
        console.log(e);
    }
}


