/*
  Warnings:

  - Added the required column `stockAveragePrice` to the `Strategy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockQuantity` to the `Strategy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Strategy" ADD COLUMN     "stockAveragePrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "stockQuantity" DOUBLE PRECISION NOT NULL;
