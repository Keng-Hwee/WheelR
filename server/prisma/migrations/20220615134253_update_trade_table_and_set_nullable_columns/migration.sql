/*
  Warnings:

  - You are about to drop the column `premium` on the `Trade` table. All the data in the column will be lost.
  - Added the required column `openFee` to the `Trade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transaction` to the `Trade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Strategy" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Trade" DROP COLUMN "premium",
ADD COLUMN     "openFee" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "transaction" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "strikePrice" DROP NOT NULL,
ALTER COLUMN "expirationDate" DROP NOT NULL,
ALTER COLUMN "closeDate" DROP NOT NULL,
ALTER COLUMN "closePrice" DROP NOT NULL,
ALTER COLUMN "closeFee" DROP NOT NULL;
