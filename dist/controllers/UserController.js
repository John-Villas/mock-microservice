"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// import { v4 as uuid } from "uuid"
// import bcrypt from "bcryptjs"
const UserService_1 = require("../services/UserService");
class UserController {
    async create(req, res) {
        const { firstname, lastname, email, password } = req.body;
        // const id = uuid()
        // const hash = bcrypt.hashSync(password, 8)
        const result = await new UserService_1.UserService().create({
            id: "id",
            firstname,
            lastname,
            email,
            hash: "hash",
        });
        if (result instanceof Error) {
            return res.status(409).json(result.message);
        }
        delete result.password;
        return res.json(result);
    }
}
exports.UserController = UserController;
