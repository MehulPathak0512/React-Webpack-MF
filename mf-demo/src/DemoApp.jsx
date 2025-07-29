import React, { useEffect, useState } from 'react';
import './components/_crypto-table.scss'; // optional styles

const DemoApp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <table className="crypto-table">
      <thead>
        <tr>
          <th>Coin</th>
          <th>Price (₹)</th>
          <th>24h Change</th>
          <th>High</th>
          <th>Low</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {data.map(coin => (
          <tr key={coin.id}>
            <td className="crypto-table__coin">
              <img src={coin.image} alt={coin.name} width="24" />
              <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
            </td>
            <td>₹{coin.current_price.toLocaleString()}</td>
            <td className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td>₹{coin.high_24h.toLocaleString()}</td>
            <td>₹{coin.low_24h.toLocaleString()}</td>
            <td>#{coin.market_cap_rank}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DemoApp;
