"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function main() {
    const server = express_1.default();
    server.listen(3000, () => console.log("Server listening."));
}
exports.default = { main };
