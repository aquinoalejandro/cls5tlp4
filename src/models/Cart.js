import { Schema, model } from "mongoose";

class CartSchema extends Schema {

    constructor() {
        super({
            products: [{ type: Schema.Types.ObjectId, ref: 'products' }],
            user: { type: Schema.Types.ObjectId, ref: 'users' }
        });
    }
}


export default model('carts', new CartSchema())