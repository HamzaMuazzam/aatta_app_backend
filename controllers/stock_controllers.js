import send from "../error_handlers/response_error_handlers.js"
import Stock from "../models/stock.js";
import {Sequelize,Op} from "sequelize";

const createStock = async (req, res) => {

    try {
        let body = req.body;
        if(body.quantity===undefined ||
            body.purchaseUnitPrice===undefined ||
            body.saleUnitPrice===undefined ||
            body.balance===undefined ||
            body.stockWeight===undefined ||
            body.companyId===undefined ||
            body.agentId===undefined ||
            body.materialType===undefined  ){
                send.response(res, "All Field are required", 400, true)
                return;
        }


        let createdStock = await  Stock.create(req.body);
        if (createdStock != null) {
            send.response(res, "Stock Created", 200, false)
        }
        else {
            send.response(res, "error occurred", 400, true)
        }

    }
    catch (e) {
        send.response(res, e.message, 400, true);
    }

}

const getStock = async (req, res) => {

    try {

        let allStock = await Stock.findAll({
            where:{
                createdAt: {
                    [Op.gte]: req.body.createdAt
                }
            }
        });
        if (allStock != null) {
            send.response(res, "Stock Fund", 200, false,allStock)
        }
        else {
            send.response(res, "error occurred", 400, true)
        }

    }
    catch (e) {
        send.response(res, e.message, 400, true);
    }

}

export default {
    createStock,
    getStock,
}