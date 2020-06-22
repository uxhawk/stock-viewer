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
        currentPrice: 0,
        lastUpdate: new Date(Date.now()).toLocaleString(),
      },
      {
        name: 'Dow Jones',
        currentPrice: 0,
        lastUpdate: new Date(Date.now()).toLocaleString(),
      },
      {
        name: 'Nasdaq',
        currentPrice: 0,
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
