export default async function handler(req, res) {

  try {

    const vixRes = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/%5EVIX");
    const vixData = await vixRes.json();

    const brentRes = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/BZ=F");
    const brentData = await brentRes.json();

    const vix =
      vixData.chart.result[0].meta.regularMarketPrice;

    const brent =
      brentData.chart.result[0].meta.regularMarketPrice;

    res.status(200).json({
      vix,
      brent
    });

  } catch (error) {

    res.status(500).json({
      error: "Market API failed"
    });

  }

}
