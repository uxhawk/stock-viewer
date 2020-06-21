import React, { useContext } from 'react';
import MarketContext from '../utils/MarketContext';
 

const Card = (props) => {
    const markets = useContext(MarketContext);
    const now = Date.now();

    return (
    <div className="card" key={props.index}>
        <h5 className="card-header">{props.name}</h5>
        <div className="card-body">
            <h5 className="card-title mb-0">$3000</h5>
            <p className="small pt-0 mt-0" id={`${props.name}updateTime}`}>{now}</p>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button className="btn btn-info" onClick={ () => {markets.handleRefreshClick()} }><i className="fas fa-sync-alt pr-2" ></i>Refresh</button>
        </div>
    </div>
    );
};

export default Card;