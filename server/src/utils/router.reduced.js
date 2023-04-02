import {Router} from "express";
const router = Router();

const  reducedRouter = function (cb){
    cb(router);
    return router;
}
export  default reducedRouter;