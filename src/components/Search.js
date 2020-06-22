import React from 'react';
import DataList from './DataList';



const Search = () => {
    return (
        <div>
            <input list="availableStocks" type="text" className="form-control" id="stockSearch" placeholder="Search Stock Symbols" />
        <DataList />
        </div>
    );
};

export default Search;