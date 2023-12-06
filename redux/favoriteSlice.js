import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState:{
        ids:[]
    },
    reducers:{
        addFavorite:(state, actions)=>{
            state.ids.push(actions.payload.id)
        },
        removeFavorite:(state, actions)=>{
            state.ids.splice(state.ids.indexOf(actions.payload.id),1)
        }
    }
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;