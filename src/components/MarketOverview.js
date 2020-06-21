import React, { useContext } from 'react';
import Card from './Card';
import MarketContext from '../utils/MarketContext';


const MarketOverview = () => {
    const markets = useContext(MarketContext);

    return (
        <MarketContext.Provider value={markets}>
        <div>
            <div className="row">
            {
                markets.marketList.map((market, index) => {
                    return (
                    <div className="col-sm-4" key={index}>
                        <Card name={market} id={index} />
                    </div>
                    )
                })
            }
            </div>
        </div>
        </MarketContext.Provider>

    );
};

export default MarketOverview;