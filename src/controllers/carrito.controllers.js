import CartService from "../services/CartService.js";

class CartController {

    async createCart(req, res) {
        try {
            const cart = await CartService.create();
            return res.status(201).json({
                message: 'Carrito creado',
                cart
            })
        } catch (err) {
            return res.status(err.statusCode || 500).json({
                message: err.message,
                status: err.status
            })
        }
    }

    async updateCart(req, res) {
        try {
            const cartId = req.params.id;
            const cartData = req.body;
            const cart = await CartService.findOne(cartId);

            if (!cart) {
                throw ({
                    statusCode: 404,
                    status: 'Not Found',
                    message: 'Carrito no encontrado'
                })
            } else {
                const updatedCart = await CartService.update(cartId, cartData);
                return res.json(updatedCart);
            }

        } catch (err) {
            return res.status(err.statusCode || 500).json({
                message: err.message,
                status: err.status
            })
        }
    }

    async deleteCart(req, res) {
        try {
            const cartId = req.params.id;
            const cart = await CartService.findOne(cartId);

            if (!cart) {
                throw ({
                    statusCode: 404,
                    status: 'Not Found',
                    message: 'Carrito no encontrado'
                })
            } else {
                const deletedCart = await CartService.delete(cartId);
                return res.json(deletedCart);
            }

        } catch (err) {
            return res.status(err.statusCode || 500).json({
                message: err.message,
                status: err.status
            })
        }
    }

}

export default new CartController()