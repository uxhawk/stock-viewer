import React, { createContext, useReducer, useContext } from "react";
import update from 'react-addons-update';
import {
  ADD_SYMBOLS, UPDATE_PRICE
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
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
