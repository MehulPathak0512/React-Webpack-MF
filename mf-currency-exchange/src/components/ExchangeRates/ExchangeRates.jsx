import React, { useEffect, useState } from 'react';
import './_exchange-rates.scss';

const TARGET_CURRENCIES = ['INR', 'EUR', 'GBP', 'AUD', 'JPY'];

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(res => res.json())
      .then(data => {
        setRates(data.rates);
        setLastUpdated(data.time_last_update_utc);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="exchange-rates">
      <ul className="exchange-rates__list">
        {TARGET_CURRENCIES.map(curr => (
          <li key={curr} className="exchange-rates__item">
            <span>{curr}</span>
            <span>{rates[curr]}</span>
          </li>
        ))}
      </ul>
      <p className="exchange-rates__updated">Last Updated: {lastUpdated}</p>
    </div>
  );
};

export default ExchangeRates;