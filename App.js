import "react-native-gesture-handler"; // Ensure this is at the top
import React from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import Navigation from "./Navigation";

// Prevent font scaling globally
import { Text } from "react-native";
import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./src/Redux/Slice";
import { Provider } from "react-redux";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const store= configureStore({
  reducer: {
    fantasy: useReducer
  }
})
const App = () => {
  return (

     <Provider store={store}>
        <Navigation/>
     </Provider>
 
  )
};

export default gestureHandlerRootHOC(App);
