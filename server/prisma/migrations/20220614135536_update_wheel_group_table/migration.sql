/*
  Warnings:

  - Added the required column `value` to the `WheelGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WheelGroup" ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;
