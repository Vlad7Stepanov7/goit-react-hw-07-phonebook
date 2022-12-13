import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const filterSlice = createSlice({
    name: "filter",
    initialState: {filter: ""},
    reducers: {
        updateFilter(state, action) {
            state.filter = action.payload;
        }
    }
})

const persistConfig = {
    key: "filter",
    storage
}

export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
export const { updateFilter } = filterSlice.actions;