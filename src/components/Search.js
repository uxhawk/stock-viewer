import React from 'react';

const Search = () => {
    return (
        <div>
            <input list="availableStocks" type="text" class="form-control" id="stockSearch" placeholder="Search Stock Symbols" />
            <datalist id="availableStocks">
                <option value="Edge" />
                <option value="Firefox" />
                <option value="Chrome" />
                <option value="Opera" />
                <option value="Safari" />
            </datalist>
        </div>
    );
};

export default Search;