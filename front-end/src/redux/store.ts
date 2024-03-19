import { configureStore, combineReducers } from "@reduxjs/toolkit";
import courseSlice from "./courseSlice";

const reducer = combineReducers({
  course: courseSlice,
});

export type RootState = ReturnType<typeof reducer>;

const createStore = () => {
  const store = configureStore({
    reducer,
  });
  return store;
};

export default createStore;
