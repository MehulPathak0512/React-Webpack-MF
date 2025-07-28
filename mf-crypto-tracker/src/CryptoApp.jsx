import React from 'react';
import CryptoTable from './components/CryptoTable';
import './components/_crypto-table.scss';

const CryptoApp = () => (
  <div className="crypto-wrapper">
    <h2>Crypto Price Tracker</h2>
    <CryptoTable />
    console.log("Loaded CryptoApp");
  </div>
);

export default CryptoApp;