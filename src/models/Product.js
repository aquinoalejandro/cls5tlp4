import mongoose from 'mongoose';
import { model, Schema } from 'mongoose';
import AutoIncrement from 'mongoose-sequence';

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
}, {
  timestamps: true,
});

ProductSchema.plugin(AutoIncrement(mongoose), { inc_field: 'productId' });

export default model('products', ProductSchema);