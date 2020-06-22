import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import API from '../utils/API';
import { ADD_SYMBOLS } from '../utils/actions';

function DataList() {
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
        };
      
    useEffect(() => {
        getSymbols();
    });

        return (
            <datalist id="availableStocks">
            {
                state.autoFillSymbols.map((item, index) =>  {
                return <option key={index} value={item} />
            })
            }
            </datalist>
        )
}

export default DataList;