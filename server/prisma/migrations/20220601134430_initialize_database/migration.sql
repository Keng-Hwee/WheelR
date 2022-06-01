-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WheelGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "portfolioId" INTEGER NOT NULL,

    CONSTRAINT "WheelGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wheel" (
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

    CONSTRAINT "Wheel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WheelGroup" ADD CONSTRAINT "WheelGroup_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wheel" ADD CONSTRAINT "Wheel_wheelGroupId_fkey" FOREIGN KEY ("wheelGroupId") REFERENCES "WheelGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
