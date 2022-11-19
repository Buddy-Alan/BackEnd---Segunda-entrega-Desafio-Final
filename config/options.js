
import { productModels } from "../mongo/models/product.js"
import { cartModels } from "../mongo/models/cart.js"

const options = {
    fileSystem: {
        products: "productos.txt",
        carts: 'carrito.txt',
    },

    mongo: {
        productos: productModels,
        carts: cartModels
    }
}

export { options }