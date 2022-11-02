import BookReviews from "components/Book/BookReviews";
import BookDescription from "components/Book/BookDescription";
import styles from "./index.module.css";
import BookCard from "components/Common/BookCard";
import { useMemo } from "react";
import mock from "constants/mock.json";
import getBookRating from "helpers/getBookRating";
export default function Book({ id }) {
  const { books, reviews } = mock;
  const book = useMemo(() => {
    for (const bookArray of books) {
      for (const book of bookArray) {
        if (book.id === id) {
          const bookReviews = reviews.find(
            (item) => item.bookId === id
          ).reviews;
          return { info: book, reviews: bookReviews };
        }
      }
    }
  }, [id]);
  return (
    <>
      {book ? (
        <>
          <div className={styles.top}>
            <BookCard {...book.info} rating={getBookRating(book.info.id)} isCounterAlignedBottom />
            <BookDescription text={book.info.description} />
          </div>

          <BookReviews reviews={book.reviews} />
        </>
      ) : (
        <h1>Такой книги не существует.</h1>
      )}
    </>
  );
}
