import routerReduced from "../../utils/router.reduced.js";
import {signInCtrl, signUpCtrl} from "../../controllers/admin/admin.controller.js";

export default routerReduced(function(r){
   r.route("/signup").post(signUpCtrl)
    r.route("/signin").post(signInCtrl)
    return r;
})