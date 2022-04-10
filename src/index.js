import { Server as WebSocketServer } from "socket.io";
import app from "./app";
import http from "http";
import sockets from "./sockets";
import "./database";
import config from "./config";
const server = http.createServer(app);
const httpServer = server.listen(config.port);
console.log("server on port", config.port);
const io = new WebSocketServer(httpServer);

sockets(io);
