import send from "../error_handlers/response_error_handlers.js"

import {Sequelize,Op} from "sequelize";
import Expenses from "../models/expense.js";

const createExpense = async (req, res) => {

    try {
        let body = req.body;
        if(body.amount===undefined ||
            body.expenseType===undefined ||
            body.paidTo===undefined ){
                send.response(res, "All Field are required", 400, true)
                return;
        }


        let createdStock = await  Expenses.create(req.body);
        if (createdStock != null) {
            send.response(res, "Expense Created", 200, false)
        }
        else {
            send.response(res, "Error occurred", 400, true)
        }

    }
    catch (e) {
        send.response(res, e.message, 400, true);
    }

}

const getAllExpenses = async (req, res) => {

    try {

        let body = req.body;
        if(body.createdAt===undefined){
            send.response(res, "createdAt required", 400, true)
            return;
        }


        let allStock = await Expenses.findAll({
            where:{
                createdAt: {
                    [Op.gte]: req.body.createdAt
                }
            }
        });
        if (allStock != null) {
            send.response(res, "Data Found", 200, false,allStock)
        }
        else {
            send.response(res, "Error occurred", 400, true)
        }

    }
    catch (e) {
        send.response(res, e.message, 400, true);
    }

}

export default {
    createExpense,
    getAllExpenses,
}