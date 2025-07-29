import React, { Suspense } from 'react';

const Demo = React.lazy(() =>
  import('demo/DemoApp').then((mod) => {
    console.log("MOD:", mod);
    return { default: mod.default };
  })
);

const CurrencyApp = React.lazy(() =>
  import('currency/CurrencyApp').then((mod) => {
    console.log("MOD:", mod);
    return { default: mod.default }; // important
  })
);


const App = () => (
  <div>
    <h1>Container</h1>
    <Suspense fallback={<div>Loading CryptoApp...</div>}>
      <Demo />
    </Suspense>
    <Suspense fallback={<div>Loading CurrencyApp...</div>}>
      <CurrencyApp />
    </Suspense>
  </div>
);

export default App;
