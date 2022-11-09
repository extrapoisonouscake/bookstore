import Statuses from 'constants/statuses'
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    ids:[],
    entities:{},
    status:null
}
export default createSlice({
    name:'books',
    initialState,
    reducers:{
        startLoading(state){
            state.status = Statuses.loading
        },
        successLoading(state,action){
            const books = action.payload;
            for(const book of books){
                const id = book.id
               
                if(!state.ids.some(v => v === id)){
                    state.ids.push(id);
                    state.entities[id] = {...book};
                }
                
            }
            state.status = Statuses.success;
        },
        failLoading(state){
            state.status = Statuses.failed
        },
    }
})