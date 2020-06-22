import React, { useEffect } from 'react';
import DataList from './DataList';
import API from '../utils/API';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_SYMBOLS } from '../utils/actions';

const Search = () => {
    const [state, dispatch] = useStoreContext();
    
    const getSymbols = () => {
        // get all symbols for stocks
        API.getSymbols()
            .then(results => {
            dispatch({
                type: ADD_SYMBOLS,
                symbols: results.data,
            });
            })
            .catch(err => console.log(err));

        API.getMutualFundSymbols()
            .then(results => {
            dispatch({
                type: ADD_SYMBOLS,
                symbols: results.data,
            });
            })
            .catch(err => console.log(err));
        };

        const clearStockSearch = () => {
            document.getElementById('stockSearch').value = '';
        }
      
    useEffect(() => {
        getSymbols();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className="row mt-4">
            <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
                <div className="input-group mb-3">
                    <input list="availableStocks" type="text" className="form-control" id="stockSearch" placeholder="Search for stock prices" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => {clearStockSearch()}}>Clear</button>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search Stocks</button>
                    </div>
                </div>
            <DataList symbols={state.autoFillSymbols}/>
            </div>
        </div>

    );
};

export default Search;