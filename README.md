# CRUD- Todo Node & Angular

###  Instalação: 

<br/>

```shell

Clone:
git clone https://github.com/VictorMaciel28/todo-list.git

```

#### Banco de dados:

´´´shell

Arquivo .env em /backend com a variável:

DATABASE_URL="mysql://user:password@endereco:porta/todo-list?schema=public"


´´´


##### Backend na porta 3030:

```shell

$ cd backend

Baixar dependencias:
$ yarn install

Rodar Migratons:
$ yarn prisma migrate dev --name init

Rodar Seeding
$ npx prisma db seed

Rodar backend:
$ yarn dev

```

#### Frontend na porta 4200:


```shell

$ cd frontend

Baixar dependencias:
$ yarn install

Rodar frontend:
$ ng serve

```
