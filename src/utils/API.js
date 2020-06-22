//on page load, call to get all the symbols; use for autofill
// var symbolURL = `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bpul0uvrh5rd45tk1jrg`;


//on page load, call to get all the mutual funds; use for autofill & system desc
// var mutualURL = `https://finnhub.io/api/v1/stock/symbol?exchange=mutualFund&token=bpul0uvrh5rd45tk1jrg`;

// need to request both of these urls, add them to the symbol context, then add it to the list for the input module

import axios from 'axios';

export default {
    getSymbols: function() {
      return axios.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bpul0uvrh5rd45tk1jrg');
    },
    getMutualFundSymbols: function() {
      return axios.get('https://finnhub.io/api/v1/stock/symbol?exchange=mutualFund&token=bpul0uvrh5rd45tk1jrg');
    },
  };