import Cart from "../models/Cart.js";

class CartService {

    async create(cart) {
        return await Cart.create(cart);
    }

    async update(id, cart) {
        return await Cart.findByIdAndUpdate(id, cart);
    }

    async delete(id) {
        return await Cart.findByIdAndDelete(id);
    }
}

export default new CartService()