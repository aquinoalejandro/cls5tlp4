import { model, Schema } from 'mongoose';


const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    isCustomer: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
});

export default model('users', UserSchema);