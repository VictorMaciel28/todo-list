import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.tasks.deleteMany({});

  await prisma.tasks.upsert({
    where: { id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0101" },
    update: {},
    create: {
      id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0101",
      name: "Treino",
      description: "Treinar boxe amanhã de tarde",
      active: true,
    },
  });
  await prisma.tasks.upsert({
    where: { id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0120" },
    update: {},
    create: {
      id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0120",
      name: "Compras",
      description: "Comprar alimentos para o almoço e janta de sábado",
      active: true,
    },
  });
  await prisma.tasks.upsert({
    where: { id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0112" },
    update: {},
    create: {
      id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0112",
      name: "Futebol",
      description: "Futebol ao domingo com os rapazes",
      active: true,
    },
  });
  await prisma.tasks.upsert({
    where: { id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0990" },
    update: {},
    create: {
      id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0990",
      name: "Super mercado na quinta",
      description: "Comprar produtos de limpeza",
      active: true,
    },
  });
  await prisma.tasks.upsert({
    where: { id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0991" },
    update: {},
    create: {
      id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0991",
      name: "Estudar",
      description: "Praticar Javascript com todo app",
      active: false,
    },
  });
  await prisma.tasks.upsert({
    where: { id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0992" },
    update: {},
    create: {
      id: "28ea2c60-ca07-11ec-ae41-6dd5f2d0992",
      name: "Preparar para viagem",
      description: "Praticar Javascript com todo app",
      active: false,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
