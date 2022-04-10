import { Server as WebSocketServer } from "socket.io";
import app from "./app";
import http from "http";
import sockets from "./sockets";
import "./database";
const server = http.createServer(app);
const httpServer = server.listen(5000);
console.log("server on port", 5000);
const io = new WebSocketServer(httpServer);

sockets(io);
