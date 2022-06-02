// ./App.js

import React from "react";
import { ActivityIndicator } from "react-native";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Router } from "./src/pages/Router";
import CustomContextProvider from "./src/contexts/CustomContext";
import { persistor, store } from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <CustomContextProvider>
          <Router />
        </CustomContextProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
