import ContenedorProducts from "../../managers/mongoDB/getItems.js";

class ProductsDatosMgDB extends ContenedorProducts {
    constructor(database) {
        //Ejecuta el constructor de la classe ContenedorProducts de MGDB
        super(database)
    }
}

export { ProductsDatosMgDB }