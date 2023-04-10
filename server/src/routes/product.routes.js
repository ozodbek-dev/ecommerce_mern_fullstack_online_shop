import { createProduct } from "../controllers/product.cotnroller.js";
import {
  requireSignIn,
  roleAccess,
} from "../middlewares/auth.middleware.js";
import reducedRouter from "../utils/router.reduced.js";
import multer  from "multer";
import shortid from "shortid";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



const storage = multer.diskStorage({
  destination:function(req,file,cb){
cb(null,path.join(path.dirname(__dirname),  "uploads"))
  },
  filename:function(req,file,cb){
    cb(null,shortid.generate() + "-" + file.originalname )
  }
})

const upload = multer({storage})

export default reducedRouter(function (r) {
  r.route("/create")
      .post(requireSignIn, roleAccess('admin'),upload.array("productPicture"), createProduct);
  r.route('/test').post((req,res,next)=>{
    console.log(req.body)
    res.send(req.body)
  })
  // r.route("/get ").get(getCategories);
  return r;
});

// router.route("/create")
//     .post(requireSignIn, roleAccess('admin'),upload.single("productPicture"), createProduct);
// router.route('/test').post((req,res,next)=>{
//   console.log(req.body)
//   res.send(req.body)
// })

// export default  router;
  