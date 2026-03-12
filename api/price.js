export default async function handler(req, res) {

  const fetchPrice = async (symbol) => {
    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`;
    const r = await fetch(url);
    const data = await r.json();
    return data.quoteResponse.result[0].regularMarketPrice;
  };

  try {

    const vix = await fetchPrice("^VIX");
    const brent = await fetchPrice("BZ=F");

    res.status(200).json({
      vix,
      brent
    });

  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch data"
    });

  }

}
