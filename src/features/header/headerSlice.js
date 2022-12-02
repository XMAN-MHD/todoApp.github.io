import { createSlice} from "@reduxjs/toolkit";

const headerSlice = createSlice(
    {
        name: 'header', 
        initialState: {
            searchTerm: ''
        }, 
        
        reducers: {
            updateHeaderSearchTerm: (state, action) => {
                state.searchTerm = action.payload;
                return state;
            }
        }     
    }

);

export default headerSlice.reducer;

export const selectHeaderSearchTerm = (state) => state.header.searchTerm;

export const {updateHeaderSearchTerm} = headerSlice.actions;
