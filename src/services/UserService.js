import User from "../models/User.js";

class UserService {
    async findAll() {
        return await User.find();
    }


    async create(user) {
        return await User.create(user);
    }

    async update(user) {

        return await User.updateOne({ _id: user._id }, user);
    }


}

export default new UserService()