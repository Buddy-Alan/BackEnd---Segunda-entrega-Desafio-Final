let contenedorDaoProd;
let contenedorDaoCart;

import { options } from "../config/options.js"
let dataBaseType = "mongo"

switch (dataBaseType) {
    case "mongo":
        const { ProductsDatosMgDB } = await import("../daos/products/productsMongo.js")
        const { CartsDatosMgDB } = await import("../daos/carts/cartMgDB.js")
        contenedorDaoProd = new ProductsDatosMgDB(options.mongo.productos)
        contenedorDaoCart = new CartsDatosMgDB(options.mongo.carts)
        break;
    case "archivos":
        const { ProductsDatosFS } = await import("../daos/products/productsFiles.js")
        const { CartsDatosFS } = await import("../daos/carts/cartFiles.js")
        contenedorDaoProd = new ProductsDatosFS(options.fileSystem.products)
        contenedorDaoCart = new CartsDatosFS(options.fileSystem.carts)
        break;
}

export { contenedorDaoProd }
export { contenedorDaoCart }