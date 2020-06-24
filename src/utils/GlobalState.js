import React, { createContext, useReducer, useContext } from "react";
import update from 'react-addons-update';
import {
  ADD_SYMBOLS, UPDATE_PRICE, GET_STOCK_PRICE
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_SYMBOLS:
      return {
        ...state,
        autoFillSymbols: [...action.symbols, ...state.autoFillSymbols]
      };

      // this really should be update index price
      case UPDATE_PRICE:
        return update(state, {
          marketList: {
            [action.index]: {
              lastUpdate: {
                $set: new Date(Date.now()).toLocaleString(),
              },
              currentPrice: {
                $set: action.currentPrice,
              }
            }
          }
        });
      
      case GET_STOCK_PRICE: 
        return update(state, {
          currentSearch: {
            name: {
              $set: action.company,
            },
            currentPrice: {
              $set: action.price,
            },
            symbol: {
              $set: action.symbol
            },
            lastUpdate: {
              $set: action.lastUpdate,
            },
          }
        })

      default:
        return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    marketList: [
      {
        name: 'S&P 500',
        symbol: 'GSPC',
        currentPrice: 10,
        lastUpdate: new Date(Date.now()).toLocaleString(),
      },
      {
        name: 'Dow Jones',
        symbol: 'DJI',
        currentPrice: 20,
        lastUpdate: new Date(Date.now()).toLocaleString(),
      },
      {
        name: 'Nasdaq',
        symbol: 'IXIC',
        currentPrice: 30,
        lastUpdate: new Date(Date.now()).toLocaleString(),
      },

    ],
    autoFillSymbols: [],
    watchList: [],
    portfolio: [],
    currentSearch: {
      name: '',
      currentPrice: 0,
      symbol: '',
      lastUpdate: new Date(Date.now()).toLocaleString(),
    },
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
