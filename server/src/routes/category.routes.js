import {
  createCategory,
  getCategories,
} from "../controllers/category.controller.js";
import {
  requireSignIn,
  roleAccess,
} from "../middlewares/auth.middleware.js";
import reducedRouter from "../utils/router.reduced.js";

export default reducedRouter(function (r) {
  r.route("/create").post(requireSignIn, roleAccess('admin'), createCategory);
  r.route("/getAllCategories").get(getCategories);
  return r;
});
  