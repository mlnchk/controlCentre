import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef
} from "react";
import { Animated } from "react-native";

export const useAnimation = config => {
  const { initialValue = 0 } = config;
  const animatedValue = useRef(new Animated.Value(initialValue)).current;

  const animate = () => {
    Animated.timing(animatedValue, config).start();
  };

  useEffect(animate, [config.toValue]);

  return animatedValue;
};

export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
