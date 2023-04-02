import routerReduced from "../../utils/router.reduced.js";
import {signInCtrl, signUpCtrl,profileCtrl} from '../../controllers/user/user.controller.js'
import {requireSignIn} from "../../middlewares/auth.middleware.js";

export default routerReduced(function(r){
   r.route("/register").post(signUpCtrl)
    r.route("/login").post(signInCtrl)

    r.route("/profile").get(requireSignIn,profileCtrl)
    return r;
})