import axios from 'axios'
import booksSlice from './index';
import {selectBooks} from './selectors'
export default function loadBooks(dispatch,getState){
    if(selectBooks(getState)?.length > 0) return;
    dispatch(booksSlice.actions.startLoading())
    axios.get('http://localhost:3001/api/books').then(res => {
        dispatch(booksSlice.actions.successLoading(res.data))
    }).catch(err => {
        dispatch(booksSlice.actions.failLoading())
    })
}