import React, { Suspense } from 'react';

// const CryptoApp = React.lazy(async () => {
//   const mod = await import('crypto/CryptoApp');
//   console.log("MOD:", mod);
//   return mod;
// });
const CryptoApp = React.lazy(() =>
  import('crypto/CryptoApp').then((mod) => {
    console.log("MOD:", mod);
    return { default: mod.default }; // important
  })
);
const CurrencyApp = React.lazy(() =>
  import('currency/CurrencyApp').then((mod) => {
    console.log("MOD:", mod);
    return { default: mod.default }; // important
  })
);
// const CurrencyApp = React.lazy(async () => {
//   const mod = await import('currency/CurrencyApp');
//   console.log("MOD:", mod);
//   return mod;
// });

// const CurrencyApp = React.lazy(() => import('currency/CurrencyApp'));

const App = () => (
  <div>
    <h1>Container</h1>
    <Suspense fallback={<div>Loading CryptoApp...</div>}>
      <CryptoApp />
    </Suspense>
    <Suspense fallback={<div>Loading CurrencyApp...</div>}>
      <CurrencyApp />
    </Suspense>
  </div>
);

export default App;
