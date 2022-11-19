import express from "express";
const app = express();
import { productRout } from "./routes/routerProducts.js";
import { cartRout } from "./routes/routerCarts.js";

import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/ecomerCoder"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    error => {
        if (error) throw new Error(`Conexion fallida ${error}`);
        console.log("conexion base de datos exitosa!")
    })

console.log("base de datos conectada")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const carritoRouter = require("./routes/routerCarts")
app.listen(8080, () => {
    console.log("server on port 8080")
})

app.use("/api/productos", productRout)

app.use("/api/carrito", cartRout)  