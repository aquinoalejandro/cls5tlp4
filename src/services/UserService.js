import User from "../models/User.js";

class UserService {
    constructor() { }

    async findAll() {
        return await User.find();
    }


    async create(User) {
        return await User.create(User);
    }

    async update(User) {

        return await User.updateOne({ _id: User._id }, User);
    }

}

export default new UserService()