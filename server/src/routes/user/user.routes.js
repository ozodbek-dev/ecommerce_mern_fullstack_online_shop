import routerReduced from "../../utils/router.reduced.js";
import {signInCtrl, signUpCtrl} from '../../controllers/auth.controller.js'
import {requireSignIn} from "../../middlewares/auth.middleware.js";
import { isReqValidated, userSignInValidateRequest, userSignUpValidateRequest } from "../../utils/validator.reduced.js";

export default routerReduced(function(r){
   r.route("/register").post(userSignUpValidateRequest,isReqValidated,signUpCtrl('user'))
    r.route("/login").post(userSignInValidateRequest,isReqValidated,signInCtrl('user'))
    // r.route("/profile").get(requireSignIn,profileCtrl)
    return r;
})