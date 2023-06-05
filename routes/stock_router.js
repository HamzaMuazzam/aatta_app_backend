import express from "express";
import stock_controllers from "../controllers/stock_controllers.js";
const routers = express.Router();

routers.all('/createStock',stock_controllers.createStock);
routers.all('/getStock',stock_controllers.getStock);

export default routers;

