import React, { createContext, useReducer, useContext } from "react";
import {
  ADD_SYMBOLS
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action) {
    case ADD_SYMBOLS:
      return {
        ...state,
        currentPost: action.post,
        loading: false
      };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    marketList: [
        'S&P 500',
        'Dow Jones',
        'Nasdaq',
    ],
    autoFillSymbols: [
      'Edge',
      'Chrome'
    ],
    watchList: [],
    portfolio: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
