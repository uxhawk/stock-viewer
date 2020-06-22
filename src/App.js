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
          <div className="row container-fluid m-0">
            <div className="col-md-10 offset-md-1 mt-4">
            <MarketOveriew />
            </div>
          </div>
      </StoreProvider>

    </div>
  );
}

export default App;
