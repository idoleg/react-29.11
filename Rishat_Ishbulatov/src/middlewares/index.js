import { apiMiddleware } from "redux-api-middleware";
import robotMiddleware from "../middlewares/robotMiddleware";
import chatMiddleware from "../middlewares/chatMiddleware";
import messageMiddleware from "./messageMiddleware";
//import reduxLogger from "redux-logger";

export default [
    apiMiddleware,
    chatMiddleware,
    messageMiddleware,
    robotMiddleware
    //reduxLogger
];
