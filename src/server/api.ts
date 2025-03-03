import { remultExpress } from "remult/remult-express";
import { Task } from "../demo/todo/Task.js";
import { getUserFromRequest } from "./auth.js";
import { User } from "../demo/auth/User.js";
  
export const api = remultExpress({
  getUser: getUserFromRequest,
  initApi: async () => {
    await User.createDemoUsers();
  },
  admin: true,
  entities: [Task, User],
});