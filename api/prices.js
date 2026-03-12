export default async function handler(request, response) {

  try {

    const fetchPrice = async (symbol) => {
      const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`;
      const res = await fetch(url);
      const data = await res.json();
      return data.quoteResponse.result[0].regularMarketPrice;
    };

    const vix = await fetchPrice("^VIX");
    const brent = await fetchPrice("BZ=F");

    response.status(200).json({
      vix: vix,
      brent: brent
    });

  } catch (error) {

    response.status(500).json({
      error: "Failed to fetch market data"
    });

  }

}
