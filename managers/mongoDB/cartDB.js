

class Cart {
    constructor(dataBase) {
        this.dataBase = dataBase;
    }

    save = async (carritoNuevo) => {
        try {
            carritoNuevo.stock = 1
            const carrito = await this.dataBase.insertMany({ timestamp: new Date(), productos: carritoNuevo })
            return carrito
        } catch (error) {
            console.log(error)
        }
    } //Fin del if de "Save"


    getAllCarritos = async () => {
        try {
            const carritos = await this.dataBase.find()
            return carritos
        } catch (error) {
            console.log(error)
        }
    }

    getCarritoByID = async (idDelCarrito) => {
        //Ver porque no me da los carritos
        try {
            const carritos = await this.dataBase.find({ _id: idDelCarrito })
            return carritos
        } catch (error) {
            console.log(error)
        }

    }

    //     //Actualizar update carrito by id

    updateCarritoByID = async (idCarrito, datoAActualizar) => {
        try {
            if (datoAActualizar == "") {
                await this.deleteCarritoByID(idCarrito)
            } else {
                datoAActualizar.stock = datoAActualizar.stock + 1
                await this.dataBase.updateOne({ "_id": idCarrito }, { $set: { "productos": datoAActualizar } })
                const carrito = await this.getCarritoByID(idCarrito)
                return carrito
            }
        } catch (error) {
            console.log(error)
        }
    }

    deleteCarritoByID = async (idAEliminar) => {
        try {
            const carritoAEliminar = await this.getCarritoByID(idAEliminar)
            if (carritoAEliminar == undefined || carritoAEliminar == "") {
                return 1
            } else {
                await this.dataBase.deleteOne({ _id: idAEliminar })
                return carritoAEliminar
            }

        } catch (error) {
            console.log(error)
        }
    }
}


export default Cart