import routerReduced from "../../utils/router.reduced.js";
import {signInCtrl, signUpCtrl} from "../../controllers/auth.controller.js";
import { isReqValidated, userSignUpValidateRequest, userSignInValidateRequest } from "../../utils/validator.reduced.js";

export default routerReduced(function(r){
   r.route("/signup").post(userSignUpValidateRequest,isReqValidated,signUpCtrl("admin"))
    r.route("/signin").post(userSignInValidateRequest,isReqValidated,signInCtrl("admin"))
    return r;
})