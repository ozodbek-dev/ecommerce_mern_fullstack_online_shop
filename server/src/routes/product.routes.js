
import { createProduct } from "../controllers/product.cotnroller.js";
import {
  requireSignIn,
  roleAccess,
} from "../middlewares/auth.middleware.js";
import reducedRouter from "../utils/router.reduced.js";
import multer  from "multer";

const upload = multer({dest:"uploads/"})

export default reducedRouter(function (r) {
  r.route("/create").post(requireSignIn, roleAccess('admin'),upload.single("productPicture"), createProduct);
  // r.route("/get ").get(getCategories);
  return r;
});
  