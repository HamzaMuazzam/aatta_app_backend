import express from "express";
import path from "path";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import morgan from "morgan";
// import sequelize from "./db_config/db_config.js";
import {AppRoute} from "./routes/AppRoutes.js";
// import db_migrations from "./models/db_migraton.js"


const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));
//TODO: parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan("dev"));

const __dirname = path.resolve();

app.use('/public', express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use('/uploads/images', express.static('uploads'));
app.use('/uploads/videos', express.static('uploads'));
app.use('/uploads/pdf_documents', express.static('uploads'));
app.use('/uploads/zip_files', express.static('uploads'));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


export let io;
let server = await app.listen(process.env.PORT || 8000, async () => {
    console.log(`SERVER IS RUNNING ON http://localhost:${process.env.PORT}`);
    // await runDBSync();
});
// app.use(new AppRoute().initAppRouts());
//



const runDBSync = async  ()=>{
    try {


       // await sequelize.sync({alter: true,});
    }
    catch (e) {
        console.log(e);
    }
}


