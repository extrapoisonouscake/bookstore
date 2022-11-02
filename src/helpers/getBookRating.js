import mock from 'constants/mock';
const {reviews} = mock
export default function getBookRating(id){
    const bookReviews = reviews.find(review => review.bookId === id)?.reviews;
    if(!bookReviews || bookReviews.length === 0) return null;
    return Math.round(bookReviews.map(review => review.rate).reduce((prev,cur)=>prev+cur,0) / bookReviews.length);
}