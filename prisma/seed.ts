import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const P1 = await prisma.portfolio.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Portfolio 1',
    },
  })

  const P1S1 = await prisma.strategy.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'SPY Strats',
      description: 'Test description',
      ticker: 'SPY',
      value: 12560.88,
      stockQuantity: 200.0,
      stockAveragePrice: 380.0,
      portfolioId: P1.id,
    },
  })

  const P1S2 = await prisma.strategy.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'STRATEGY 2',
      description: 'Wheel for  MSFT',
      ticker: 'MSFT',
      value: 5798.33,
      stockQuantity: 0.0,
      stockAveragePrice: 0.0,
      portfolioId: P1.id,
    },
  })

  const P1S3 = await prisma.strategy.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: 'AAPL WHEELZ',
      description: 'Wheel for Apple',
      ticker: 'AAPL',
      value: 8966.71,
      stockQuantity: 300.0,
      stockAveragePrice: 150.0,
      portfolioId: P1.id,
    },
  })

  await prisma.trade.createMany({
    data: [
      {
        id: 1,
        ticker: 'SPY',
        quantity: 200,
        action: 'BUY',
        type: 'STOCK',
        openDate: new Date('2022-01-22'),
        openFee: 2.0,
        strikePrice: 380,
        expirationDate: null,
        closeDate: new Date('2022-01-22'),
        closePrice: null,
        closeFee: null,
        transaction: -76000,
        strategyId: P1S1.id,
      },
      {
        id: 2,
        ticker: 'SPY',
        quantity: 1,
        action: 'SELL',
        type: 'CALL OPTION',
        openDate: new Date('2022-01-25'),
        openFee: 1.7,
        strikePrice: 392,
        expirationDate: new Date('2022-02-25'),
        closeDate: new Date('2022-02-21'),
        closePrice: 120,
        closeFee: 1.3,
        transaction: 460,
        strategyId: P1S1.id,
      },
      {
        id: 3,
        ticker: 'SPY',
        quantity: 1,
        action: 'SELL',
        type: 'CALL OPTION',
        openDate: new Date('2022-03-01'),
        openFee: 1.0,
        strikePrice: 385,
        expirationDate: null,
        closeDate: new Date('2022-04-01'),
        closePrice: 80,
        closeFee: 1.0,
        transaction: 580,
        strategyId: P1S1.id,
      },
    ],
  })

  await prisma.trade.createMany({
    data: [
      {
        id: 4,
        ticker: 'MSFT',
        quantity: 200,
        action: 'BUY',
        type: 'STOCK',
        openDate: new Date('2022-01-22'),
        openFee: 2.0,
        strikePrice: 260,
        expirationDate: null,
        closeDate: new Date('2022-01-22'),
        closePrice: null,
        closeFee: null,
        transaction: -52000,
        assigned: null,
        strategyId: P1S2.id,
      },
      {
        id: 5,
        ticker: 'MSFT',
        quantity: 100,
        action: 'SELL',
        type: 'STOCK',
        openDate: new Date('2022-01-25'),
        openFee: 2.0,
        strikePrice: 280,
        expirationDate: new Date('2022-02-25'),
        closeDate: new Date('2022-02-21'),
        closePrice: null,
        closeFee: null,
        transaction: 28000,
        assigned: null,
        strategyId: P1S2.id,
      },
      {
        id: 6,
        ticker: 'MSFT',
        quantity: 1,
        action: 'SELL',
        type: 'CALL OPTION',
        openDate: new Date('2022-03-01'),
        openFee: 1.0,
        strikePrice: 280,
        expirationDate: null,
        closeDate: new Date('2022-04-01'),
        closePrice: 0.0,
        closeFee: 0.0,
        transaction: 600,
        assigned: true,
        strategyId: P1S2.id,
      },
    ],
  })

  await prisma.trade.createMany({
    data: [
      {
        id: 7,
        ticker: 'AAPL',
        quantity: 100,
        action: 'BUY',
        type: 'STOCK',
        openDate: new Date('2022-01-01'),
        openFee: 0.0,
        strikePrice: 0.0,
        expirationDate: null,
        closeDate: null,
        closePrice: null,
        closeFee: null,
        transaction: 0,
        assigned: null,
        strategyId: P1S3.id,
      },
      {
        id: 8,
        ticker: 'AAPL',
        quantity: 1,
        action: 'SELL',
        type: 'CALL OPTION',
        openDate: new Date('2022-01-01'),
        openFee: 1.0,
        strikePrice: 180,
        expirationDate: new Date('2022-01-22'),
        closeDate: new Date('2022-01-22'),
        closePrice: 0.0,
        closeFee: 1.0,
        transaction: 500,
        assigned: false,
        strategyId: P1S3.id,
      },
      {
        id: 9,
        ticker: 'AAPL',
        quantity: 100,
        action: 'SELL',
        type: 'PUT OPTION',
        openDate: new Date('2022-01-25'),
        openFee: 1.0,
        strikePrice: 170,
        expirationDate: new Date('2022-02-25'),
        closeDate: new Date('2022-02-21'),
        closePrice: 100,
        closeFee: 1.0,
        transaction: 750,
        assigned: false,
        strategyId: P1S3.id,
      },
      {
        id: 10,
        ticker: 'AAPL',
        quantity: 1,
        action: 'SELL',
        type: 'CALL OPTION',
        openDate: new Date('2022-03-01'),
        openFee: 1.0,
        strikePrice: 190,
        expirationDate: new Date('2022-04-01'),
        closeDate: new Date('2022-03-28'),
        closePrice: 50,
        closeFee: 1.0,
        transaction: 450,
        assigned: false,
        strategyId: P1S3.id,
      },
      {
        id: 11,
        ticker: 'AAPL',
        quantity: 1,
        action: 'SELL',
        type: 'CALL OPTION',
        openDate: new Date('2022-08-30'),
        openFee: 1.0,
        strikePrice: 160,
        expirationDate: new Date('2022-10-01'),
        closeDate: null,
        closePrice: null,
        closeFee: null,
        transaction: 750,
        assigned: null,
        strategyId: P1S3.id,
      },
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
