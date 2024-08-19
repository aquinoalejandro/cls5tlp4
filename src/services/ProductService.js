import Product from "../models/Product.js";

class ProductService {
    constructor() { }

    async findAll() {
        return await Product.find();
    }


    async create(product) {
        return await Product.create(product);
    }


    async update(productId, product) {
        return await Product.updateOne({ _id: productId }, product);
    }


    async delete(productId) {   
        return await Product.deleteOne({ _id: productId });
    }
    async findOne(id) {
        return await Product.findById(id);
    }

    // Solo deberia poder hacerse con clientes
    async buy(productId) {
        return await Product.updateOne({ _id: productId }, { $inc: { stock: -1 } });
    }



}

export default new ProductService()