import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MarketOveriew from './components/MarketOverview';
import { StoreProvider } from './utils/GlobalState';

function App() {
  return (
    <div>
      <StoreProvider>
        <Nav />
          <div className="row">
            <div className="col-md-8 offset-md-2 mt-4">
            <MarketOveriew />
            </div>
          </div>
      </StoreProvider>

    </div>
  );
}

export default App;
