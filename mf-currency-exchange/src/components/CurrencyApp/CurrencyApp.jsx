import React from 'react';
import ExchangeRates from '../ExchangeRates/ExchangeRates';

const CurrencyApp = () => (
  <div className="exchange-wrapper">
    <h2>USD Exchange Rates</h2>
    <ExchangeRates />
  </div>
);

export default CurrencyApp;