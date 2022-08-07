-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Strategy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ticker" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "stockQuantity" DOUBLE PRECISION NOT NULL,
    "stockAveragePrice" DOUBLE PRECISION NOT NULL,
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
    "openFee" DOUBLE PRECISION NOT NULL,
    "strikePrice" DOUBLE PRECISION,
    "expirationDate" TIMESTAMP(3),
    "closeDate" TIMESTAMP(3),
    "closePrice" DOUBLE PRECISION,
    "closeFee" DOUBLE PRECISION,
    "transaction" DOUBLE PRECISION NOT NULL,
    "strategyId" INTEGER NOT NULL,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Strategy" ADD CONSTRAINT "Strategy_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_strategyId_fkey" FOREIGN KEY ("strategyId") REFERENCES "Strategy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
