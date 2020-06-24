import React from 'react';

const CurrentSearch = (props) => {
    return (
        <div className="card">
            <div className="card-header">
            <h5 className="mb-0 pb-0">{props.currentSearch.symbol}</h5>
            <p className="small p-0 m-0">{props.currentSearch.name}</p>
            </div>
            <div className="card-body">
                <h5 className="mb-0 pb-0">${props.currentSearch.currentPrice}</h5>
                <p className="small pt-0 mt-0">Updated At: {props.currentSearch.lastUpdate}</p>
                <button className="btn btn-info" ><span className="fas fa-sync-alt pr-2" ></span>Refresh</button>
                
            </div>
        </div>
    );
};

export default CurrentSearch;


