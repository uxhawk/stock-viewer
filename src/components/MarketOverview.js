import React from 'react';
import Card from './Card';
import Search from './Search';
import { useStoreContext } from '../utils/GlobalState';


const MarketOverview = () => {
    const [state] = useStoreContext();

    return (
        <div>
            <div className="row pb-4">
            {
                state.marketList.map((item, index) => {
                    return (
                    <div className="col-sm-4" key={index}>
                        <Card name={item.name} id={index} lastUpdate={item.lastUpdate}/>
                    </div>
                    )
                })
            }
            </div>
            <Search />
        </div>
    );
};

export default MarketOverview;