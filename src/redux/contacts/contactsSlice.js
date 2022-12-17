import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
    return {
                contacts: [...state.contacts],
                isLoading: true,
                error: null
            }
}

const handleRejected = (state, action) => {
    console.log(state.contacts);
     return {
                contacts: [...state.contacts],
                isLoading: false,
                error: action.payload
           }
}

    
const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
        isLoading: false,
        error: null
        },
    extraReducers: (builder) =>
        builder
        .addCase(fetchContacts.pending, (state, action) => handlePending(state))
            .addCase(fetchContacts.fulfilled, (state, action) => {
             return {
                contacts: [...action.payload],
                isLoading: false,
                error: null
            }
        })
        .addCase(fetchContacts.rejected, (state, action) => handleRejected(state, action))
        .addCase(addContact.pending, (state, action) => handlePending(state))
            .addCase(addContact.fulfilled, (state, action) => {
            return {
                contacts: [...state.contacts, action.payload],
                isLoading: false,
                error: null
            }
        })
        .addCase(addContact.rejected, (state, action) => handleRejected(state, action))
        .addCase(deleteContact.pending, (state, action) => handlePending(state))
            .addCase(deleteContact.fulfilled, (state, action) => {    
              state.isLoading = false;
              state.error = null;
              const index = state.contacts.findIndex(
              task => task.id === action.payload.id
              );
             state.contacts.splice(index, 1);
        })
        .addCase(deleteContact.rejected, (state, action) => handleRejected(state, action))
})

const persistConfig = {
    key: "contacts",
    storage
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
