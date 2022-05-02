import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from 'cors';
import { TasksModel } from "./models/TasksModel";
const app = express();
const prisma = new PrismaClient();
const tasksModel = new TasksModel();

app.use(express.json());

const allowedOrigins = ['http://localhost:4200'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

app.get("/tasks", async (req: Request, res: Response) => {
  const alltasks = await tasksModel.findAll();
  res.json(alltasks);
});

app.get("/tasks/completed", async (req: Request, res: Response) => {
  const alltasks = await tasksModel.findAllCompleted();
  res.json(alltasks);
});

app.post("/tasks", async (req: Request, res: Response) => {
  const { name, description, active } = req.body;
  const newtask = await tasksModel.create(name, description, active);
  res.json(newtask);
});

app.put("/tasks", async (req: Request, res: Response) => {
  const { id, name, description } = req.body;
  const editedTask = await tasksModel.edit(id, name, description);
  res.json(editedTask);
});

app.delete("/task/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedTask = await tasksModel.remove(id);
  res.json(deletedTask);
});

app.put("/task/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const active = req.body.active;
  const updatedTask = await tasksModel.update(id, !active);
  res.json(updatedTask);
});

app.get("/", async (req: Request, res: Response) => {
  res.send({ message: "Server running on port 3030" });
});

app.listen("3030", () => {
  console.log("Server running on port 3030");
});
