import robotMiddleware from "../middlewares/robotMiddleware";
import chatMiddleware from "../middlewares/chatMiddleware";
import messageMiddleware from "./messageMiddleware";

export default [chatMiddleware, messageMiddleware, robotMiddleware];
