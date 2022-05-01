import express from "express";
import { PrismaClient } from "@prisma/client";
import { idText } from "typescript";
const prisma = new PrismaClient();

export class TasksModel {
  create(name: string, description: string, active: boolean) {
    return prisma.tasks.create({
      data: {
        name: name,
        description,
        active,
      },
    });
  }

  edit(id: number, name: string, description: string) {
    return prisma.tasks.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
      },
    });
  }

  remove(id: number) {
    return prisma.tasks.delete({
      where: {
        id: id,
      },
    });
  }

  async findAll() {
    const tasksMany = await prisma.tasks.findMany();
    return tasksMany;
  }
}
