import React from 'react';

const EmptyWatchList = () => {
    return (
        <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
            <div class="card text-center border-dark" style={{borderStyle: "dashed"}}>
                <div class="card-body">
                    <p>You don't have any stocks in your Watch List yet.</p>
                    <button className="btn btn-success">Seach Stocks</button>
                </div>
            </div>
        </div>
    );
};

export default EmptyWatchList;