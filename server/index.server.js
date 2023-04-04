import express from 'express';
import 'colors'
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import {config} from 'dotenv'
import morgan from 'morgan'
import adminRoutes from "./src/routes/admin/admin.routes.js";
import userRoutes from "./src/routes/user/user.routes.js";
import categoryRoutes from './src/routes/category.routes.js';
import productRoutes from './src/routes/product.routes.js';

const app = express();
// Using middlewares
app.use(express.json())
app.use(bodyParser.json());
app.use(morgan("tiny"))
// environment variable or you can say constants

//using admin routes
app.use("/api/v1/admin", adminRoutes)
// using user routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
config();
const port = process.env.PORT || 5001
// connecting to the db;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("MongoDB connected successfully!".bold.green);
    app.listen(port,()=>console.log(`Server is listening on port: ${port} `.blue.bold))
}).catch(err=>{
    console.log({err})
    process.exit(1)
})
