import React from 'react';

const EmptyWatchList = () => {
    
    function focusStockSearch() {
        document.getElementById('stockSearch').focus();
        console.log('btn clicked');
        }
    return (
        <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
            <div className="card text-center border-dark" style={{borderStyle: "dashed"}}>
                <div className="card-body">
                    <p>You don't have any stocks in your Watch List yet.</p>
                    <button className="btn btn-success" onClick={() => {focusStockSearch()} }>Seach Stocks</button>
                </div>
            </div>
        </div>
    );
};

export default EmptyWatchList;