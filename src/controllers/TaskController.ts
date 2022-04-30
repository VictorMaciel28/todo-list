import express from "express";
import { TaskModel } from "../models/TaskModel";
const router = express.Router();

class TaskController {
  async findAll(req: any, res: any) {
      const task = await TaskModel.create({})
  }
}

export default new TaskController();
