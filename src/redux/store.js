import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import { filterReducer } from "./filter/filterSlice";
import { contactsAPI } from "./contacts/contactsAPI";

export const store = configureStore({
    reducer: {
        [contactsAPI.reducerPath]: contactsAPI.reducer,
        filter: filterReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }), contactsAPI.middleware],
})

export const persistor = persistStore(store);