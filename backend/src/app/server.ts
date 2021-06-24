import express, { Express } from "express";

function main(){
    const server: Express = express();

    server.listen(3000, () => console.log("Server listening."))
}
export default {main};