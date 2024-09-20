import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";

const store = createStore(rootReducer);

export default store;
