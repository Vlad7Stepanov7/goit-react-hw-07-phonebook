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
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.rejected]: handleRejected,
        [fetchContacts.fulfilled](_, action) {
            return {
                contacts: [...action.payload],
                isLoading: false,
                error: null
            }
        },
        [addContact.fulfilled](state, action) {
            return {
                contacts: [...state.contacts, action.payload],
                isLoading: false,
                error: null
            }
        },
        [deleteContact.fulfilled](state, action) {
            const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload);
            console.log()
            return {
                contacts: [...updatedContacts],
                isLoading: false,
                error: null
            }
        }
        
    }
})

const persistConfig = {
    key: "contacts",
    storage
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
