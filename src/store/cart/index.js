import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    books:{}
}
const doesBookExist = (id,books) => Object.keys(books).some(b => b === id)
export default createSlice({
    name:'cart',
    initialState,
    reducers:{
        setBookCount(state,action){
            const {id,count} = action.payload;
           state.books[id] = count
        },
        clearBook(state,action){
            const id = action.payload;
            if(!doesBookExist(id,state.books)) return;
            delete books[id]
        }
    }
})