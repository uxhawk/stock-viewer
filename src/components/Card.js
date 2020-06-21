import React, { useContext } from 'react';
import MarketContext from '../utils/MarketContext';
 

const Card = (props) => {
    // const markets = useContext(MarketContext);
    const now = new Date(Date.now()).toLocaleString();;

    const handleRefreshClick = (event) => {
        const buttonID = event.currentTarget.id;
       document.getElementById(`${buttonID}Time`).innerText = new Date(Date.now()).toLocaleString();; 
    }

    return (
    <div className="card" key={props.index}>
        <h5 className="card-header">{props.name}</h5>
        <div className="card-body">
            <h5 className="card-title mb-0">$3000</h5>
            <p className="small pt-0 mt-0" id={`${props.name}Time`}>{now}</p>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button id={props.name} className="btn btn-info" onClick={ (event) => {handleRefreshClick(event)} }><span className="fas fa-sync-alt pr-2" ></span>Refresh</button>
        </div>
    </div>
    );
};

export default Card;