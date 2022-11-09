import BookReviews from "components/Book/BookReviews";
import BookDescription from "components/Book/BookDescription";
import styles from "./index.module.css";
import BookCard from "components/Common/BookCard";
import { useEffect, useMemo } from "react";
import getBookRating from "helpers/getBookRating";
import { useParams } from "react-router-dom";
import loadReviews from 'store/reviews/loadReviews'
import {useSelector,useDispatch} from 'react-redux'
import {selectReviews} from 'store/reviews/selectors'
import {selectBooks} from 'store/books/selectors'
export default function Book() {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews)
  const books = useSelector(selectBooks);
  const {id} = useParams()
  const book = books.entities[id];
  useEffect(()=>{
    dispatch((d,s)=>loadReviews(d,s,id))
  },[])
  return (
    <>
      {book && Object.keys(reviews.entities).length > 0 ? (
        <>
          <div className={styles.top}>
            <BookCard {...book} rating={getBookRating(book.id)} isCounterAlignedBottom />
            <BookDescription text={book.description} />
          </div>

          <BookReviews reviews={reviews.entities[Object.keys(reviews.entities).find(i => reviews.entities[i].bookId === Number(id))]?.reviews} />
        </>
      ) : (
        <h1>Такой книги не существует.</h1>
      )}
    </>
  );
}
