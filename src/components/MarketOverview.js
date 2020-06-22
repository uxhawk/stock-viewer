import React, { useContext } from 'react';
import Card from './Card';
import Search from './Search';
import { useStoreContext } from '../utils/GlobalState';


const MarketOverview = () => {
    const [state, dispatch] = useStoreContext();

    dispatch();

    return (
        <div>
            <div className="row">
            {
                state.marketList.map((item, index) => {
                    return (
                    <div className="col-sm-4" key={index}>
                        <Card name={item} id={index} />
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