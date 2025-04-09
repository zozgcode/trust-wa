import { useEffect, useState } from 'react';

export const useCryptoPrices = () => {
  const [prices, setPrices] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd');
      const data = await res.json();
      setPrices({
        bitcoin: data.bitcoin.usd,
        ethereum: data.ethereum.usd,
        binancecoin: data.binancecoin.usd,
      });
    };

    fetchPrices();
  }, []);

  return { prices }; // return prices as an object with string keys and number values
};
