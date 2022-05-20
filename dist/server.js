"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
// import "./database"
// import cors from "cors"
// require("dotenv/config")
const port = process.env.SERVER_PORT || 3003;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cors())
app.use(routes_1.routes);
app.listen(port, () => {
    console.log(`listenning at port ${port}`);
});
