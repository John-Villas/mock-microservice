"use strict";
// import { PrismaClient } from "@prisma/client"
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
// const prisma = new PrismaClient()
class UserService {
    async create({ id, firstname, lastname, email, hash, }) {
        // if (await prisma.user.findFirst({ where: { email: email } })) {
        //   return new Error("This email address has already been registered")
        // }
        // const user = await prisma.user.create({
        //   data: {
        //     id: id,
        //     firstname: firstname,
        //     lastname: lastname,
        //     email: email,
        //     password: hash,
        //   },
        // })
        // return user
    }
}
exports.UserService = UserService;
