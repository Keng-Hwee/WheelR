/*
  Warnings:

  - You are about to drop the `Wheel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Wheel" DROP CONSTRAINT "Wheel_wheelGroupId_fkey";

-- DropTable
DROP TABLE "Wheel";

-- CreateTable
CREATE TABLE "WheelItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "openPrice" DOUBLE PRECISION NOT NULL,
    "strikePrice" DOUBLE PRECISION NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "closeDate" TIMESTAMP(3) NOT NULL,
    "closed" BOOLEAN NOT NULL,
    "closePrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "wheelGroupId" INTEGER NOT NULL,

    CONSTRAINT "WheelItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WheelItem" ADD CONSTRAINT "WheelItem_wheelGroupId_fkey" FOREIGN KEY ("wheelGroupId") REFERENCES "WheelGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
