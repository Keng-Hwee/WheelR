/*
  Warnings:

  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WheelGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WheelItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_wheelItemId_fkey";

-- DropForeignKey
ALTER TABLE "WheelGroup" DROP CONSTRAINT "WheelGroup_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "WheelItem" DROP CONSTRAINT "WheelItem_wheelGroupId_fkey";

-- DropTable
DROP TABLE "Contract";

-- DropTable
DROP TABLE "WheelGroup";

-- DropTable
DROP TABLE "WheelItem";

-- CreateTable
CREATE TABLE "Strategy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ticker" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "portfolioId" INTEGER NOT NULL,

    CONSTRAINT "Strategy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trade" (
    "id" SERIAL NOT NULL,
    "ticker" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "action" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "openDate" TIMESTAMP(3) NOT NULL,
    "strikePrice" DOUBLE PRECISION NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "closeDate" TIMESTAMP(3) NOT NULL,
    "closePrice" DOUBLE PRECISION NOT NULL,
    "closeFee" DOUBLE PRECISION NOT NULL,
    "premium" DOUBLE PRECISION NOT NULL,
    "strategyId" INTEGER NOT NULL,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Strategy" ADD CONSTRAINT "Strategy_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_strategyId_fkey" FOREIGN KEY ("strategyId") REFERENCES "Strategy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
