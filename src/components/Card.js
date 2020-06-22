import React from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRICE } from '../utils/actions';

const Card = (props) => {
    const [state, dispatch] = useStoreContext();

    const handleRefreshClick = (event) => {
        const buttonIndex = event.currentTarget.id;
    //    document.getElementById(`${buttonID}Time`).innerText = new Date(Date.now()).toLocaleString();

        dispatch({
            type: UPDATE_PRICE,
            index: buttonIndex,
        });

    }

    return (
    <div className="card" key={props.id}>
        <h5 className="card-header">{props.name}</h5>
        <div className="card-body">
            <h5 className="card-title mb-0">$3000</h5>
            <p className="small pt-0 mt-0" id={`${props.name}Time`}>{props.lastUpdate}</p>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <button id={props.id} className="btn btn-info" onClick={ (event) => {handleRefreshClick(event)} }><span className="fas fa-sync-alt pr-2" ></span>Refresh</button>
        </div>
    </div>
    );
};

export default Card;