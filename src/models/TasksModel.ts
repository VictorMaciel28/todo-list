import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class TasksModel {
  async create(name: string, description: string, active: boolean) {
    prisma.tasks.create({
      data: {
        name: name,
        description,
        active,
      },
    });
  }

  async findAll() {
    const tasksMany = await prisma.tasks.findMany();
    return tasksMany;
  }
}
