import axios from 'axios'
import reviewsSlice from './index';
import {selectReviews} from './selectors'
export default function loadReviews(dispatch,getState,id){
    if(selectReviews(getState)?.length > 0) return;
    dispatch(reviewsSlice.actions.startLoading())
    axios.get('http://localhost:3001/api/reviews').then(res => {
        dispatch(reviewsSlice.actions.successLoading(res.data))
    }).catch(err => {
        dispatch(reviewsSlice.actions.failLoading())
    })
}