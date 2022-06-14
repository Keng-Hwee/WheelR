/*
  Warnings:

  - You are about to drop the column `closeDate` on the `WheelItem` table. All the data in the column will be lost.
  - You are about to drop the column `closePrice` on the `WheelItem` table. All the data in the column will be lost.
  - You are about to drop the column `closed` on the `WheelItem` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `WheelItem` table. All the data in the column will be lost.
  - You are about to drop the column `expirationDate` on the `WheelItem` table. All the data in the column will be lost.
  - You are about to drop the column `openPrice` on the `WheelItem` table. All the data in the column will be lost.
  - You are about to drop the column `strikePrice` on the `WheelItem` table. All the data in the column will be lost.
  - Added the required column `description` to the `WheelItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WheelItem" DROP COLUMN "closeDate",
DROP COLUMN "closePrice",
DROP COLUMN "closed",
DROP COLUMN "createdAt",
DROP COLUMN "expirationDate",
DROP COLUMN "openPrice",
DROP COLUMN "strikePrice",
ADD COLUMN     "description" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "ticker" TEXT NOT NULL,
    "strikePrice" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "closed" BOOLEAN NOT NULL,
    "closeDate" TIMESTAMP(3) NOT NULL,
    "closePrice" DOUBLE PRECISION NOT NULL,
    "openAt" TIMESTAMP(3) NOT NULL,
    "premium" DOUBLE PRECISION NOT NULL,
    "wheelItemId" INTEGER NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_wheelItemId_fkey" FOREIGN KEY ("wheelItemId") REFERENCES "WheelItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
