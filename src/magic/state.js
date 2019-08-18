import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  airdrop: false,
  airplane: false,
  bluetooth: false,
  cellular: false,
  hotspot: false,
  wifi: false,
  doNotDisturb: false,
  lockOrientation: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleIcon":
      return {
        ...state,
        [action.slug]: !state[action.slug]
      };

    default:
      return state;
  }
};

export const StateContext = createContext();
export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
