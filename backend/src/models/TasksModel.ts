import express from "express";
import { PrismaClient } from "@prisma/client";
import { idText } from "typescript";
const prisma = new PrismaClient();

export class TasksModel {
  create(name: string, description: string, active: boolean) {
    return prisma.tasks.create({
      data: {
        name,
        description,
        active,
      },
    });
  }

  edit(id: number, name: string, description: string) {
    return prisma.tasks.update({
      where: {
        id,
      },
      data: {
        name,
        description,
      },
    });
  }

  remove(id: number) {
    return prisma.tasks.delete({
      where: {
        id,
      },
    });
  }

  update(id: number, active: boolean) {
    return prisma.tasks.update({
      where: {
        id,
      },
      data: {
        active,
      },
    });
  }

  async findAll() {
    return await prisma.tasks.findMany();
  }
}
