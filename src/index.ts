import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { allowedNodeEnvironmentFlags } from "process";
import { TasksModel } from "./models/TasksModel";
const app = express();
const prisma = new PrismaClient();
const tasksModel = new TasksModel();

app.use(express.json());

app.get("/tasks", async (req: Request, res: Response) => {
  const alltasks = await tasksModel.findAll();
  res.json(alltasks);
});

app.post("/tasks", async (req: Request, res: Response) => {
  console.log(req.body);

  const { name, description, active } = req.body;
  const tasks = await tasksModel.create(name, description, active);
  res.json(tasks);
});

app.get("/", async (req: Request, res: Response) => {
  console.log("Listen on 3030");
  res.send({ message: "funcionando" });
});

app.listen("3030", () => {
  console.log("Server running on port 3030");
});
