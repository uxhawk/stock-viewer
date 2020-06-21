import React from "react";

const MarketContext = React.createContext({
  marketList: [
      'S&P 500',
      'Dow Jones',
      'Nasdaq',
  ],

//   handleRefreshClick: () => {
//     this.forceUpdate();  
//     console.log('button clicked');
//   }
});

export default MarketContext;
