import express from "express";

import expense_controllers from "../controllers/expense_controllers.js";
const routers = express.Router();

routers.all('/createExpense',expense_controllers.createExpense);
routers.all('/getAllExpenses',expense_controllers.getAllExpenses);

export default routers;

