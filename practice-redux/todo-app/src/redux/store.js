import { combineReducers } from "redux";
// import thunk from "redux-thunk";
import todoReducer from "./todo";
import authReducer from "./auth";
import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// => curring funtion

// function myMiddleWare(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }

// const myMiddleWare = (store) => (next) => (action) => {
//   console.log(action, store.getState());
//   if (action.type === "ADD_TODO" && action.payload === "nusi")
//     action.payload = "Hehe";
//   return next(action);
// };

// mo phong thunk
// const asyncMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(next); //truyen dispatch vao action
//   }
//   return next(action);
// };

const logger = createLogger();

// export default createStore(reducer, applyMiddleware(logger, thunk));

const store = configureStore({
  reducer: persistedReducer,
}); //include thunk

export const persistor = persistStore(store);

export default store;
