/*
  Warnings:

  - You are about to alter the column `active` on the `tasks` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `tasks` MODIFY `active` BOOLEAN NOT NULL;
