import React from 'react';
import './App.css';
import Search from './components/Search';
import Nav from './components/Nav';

import MarketOveriew from './components/MarketOverview';
import { StoreProvider } from './utils/GlobalState';
import WatchList from './components/WatchList';

function App() {
  return (
    <div>
      <StoreProvider>
        <Nav />
        <MarketOveriew />
        <Search />
        <WatchList />
      </StoreProvider>
    </div>
  );
}

export default App;
