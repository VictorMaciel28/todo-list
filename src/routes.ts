import { Router } from "express";
import TaskController from "./controllers/TaskController";

const routes = Router();

routes.get("/tasks",(req,res)=>{
    TaskController.findAll(req, res)
});

routes.get("/", (req, res) => {
  res.json({ Hello: "World" });
});

export { routes };
