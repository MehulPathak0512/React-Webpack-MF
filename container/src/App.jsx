import React, { Suspense } from 'react';
import DemoApp from '../../mf-demo/src/DemoApp';

// const CryptoApp = React.lazy(async () => {
//   const mod = await import('crypto/CryptoApp');
//   console.log("MOD:", mod);
//   return mod;
// });

const Demo = React.lazy(() =>
  import('demo/DemoApp').then((mod) => {
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


const App = () => (
  <div>
    <h1>Container</h1>
    <Suspense fallback={<div>Loading CryptoApp...</div>}>
      <DemoApp />
    </Suspense>
    <Suspense fallback={<div>Loading CurrencyApp...</div>}>
      <CurrencyApp />
    </Suspense>
  </div>
);

export default App;
