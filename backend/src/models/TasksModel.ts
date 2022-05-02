import express from "express";
import { PrismaClient } from "@prisma/client";
import { idText } from "typescript";
const uuidv4 = require("uuid");

const prisma = new PrismaClient();

export class TasksModel {
  create(name: string, description: string, active: boolean) {
    return prisma.tasks.create({
      data: {
        id: uuidv4.v1(),
        name,
        description,
        active,
      },
    });
  }

  edit(id: string, name: string, description: string) {
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

  remove(id: string) {    
    return prisma.tasks.delete({
      where: {
        id,
      },
    });
  }

  update(id: string, active: boolean) {
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
    return await prisma.tasks.findMany({
      where: {
        active: true,
      },
    });
  }

  async findAllCompleted() {
    return await prisma.tasks.findMany({
      where: {
        active: false,
      },
    });
  }
}
