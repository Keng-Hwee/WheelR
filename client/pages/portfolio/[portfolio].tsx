const PortfolioDetail: React.FunctionComponent<{
  portfolio: string
}> = ({ portfolio }) => {
  console.log(portfolio)
  return <h1>{portfolio}</h1>
}

export default PortfolioDetail
