import {Router} from "express";


const  reducedRouter = function (cb){
   const router = Router();
    cb(router);
    return router;
}
export  default reducedRouter;