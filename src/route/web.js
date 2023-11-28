import express from "express";
import homecontrollers from "../controllers/homecontrollers";

let router = express.Router();

let initWebRoutes = (app) => {
    
    router.get('/',homecontrollers.getHomePage);
    router.get('/crud',homecontrollers.getCRUD);

    return app.use("/", router);

}

module.exports = initWebRoutes;
   