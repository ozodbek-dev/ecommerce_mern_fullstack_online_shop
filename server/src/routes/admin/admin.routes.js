import routerReduced from "../../utils/router.reduced.js";
import {signInCtrl, signUpCtrl} from "../../controllers/admin/admin.controller.js";
import { isReqValidated, userSignUpValidateRequest, userSignInValidateRequest } from "../../utils/validator.reduced.js";

export default routerReduced(function(r){
   r.route("/signup").post(userSignUpValidateRequest,isReqValidated,signUpCtrl)
    r.route("/signin").post(userSignInValidateRequest,isReqValidated,signInCtrl)
    return r;
})