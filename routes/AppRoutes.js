import express from 'express';
const routers = express.Router();
import userRoutes from "./user_routes/user_router.js"
import dotenv from "dotenv";
dotenv.config();

export class AppRoute {


    initAppRouts() {
        AppRoute.#rootRoute();
        AppRoute.#userRouts();
        routers.all('*', (req, res, next) => {
            res.status(404).send({
                message: `Can't find ${req.originalUrl} on this server!`,
                code: 404,
            });
        })
        return routers;
    }


    static #rootRoute() {

        routers.get('/',
            (req, res) => {

                res.send({
                    status: "Hello! Server is up."
                });
            },
        );


    }

    static #userRouts() {

        routers.use("/user", userRoutes);
    }

}




