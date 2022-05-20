"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const UserController_1 = require("./controllers/UserController");
// import { AuthController } from "./controllers/AuthController"
// import { GetCharactersController } from "./controllers/GetCharactersController"
// import authMiddleware from "./middlewares/authMiddleware"
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.post("/user", new UserController_1.UserController().create);
