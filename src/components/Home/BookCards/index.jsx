import styles from './index.module.css';
import BookCard from "components/Common/BookCard";
import mock from 'constants/mock.json'
import getBookRating from 'helpers/getBookRating';
export default function BookCards({typeIndex}) {
  const {books:data} = mock
  const books = data[typeIndex];
  return (
    <div className={styles.main}>
      {books.map((book, i) => (
        <BookCard key={i} {...book} rating={getBookRating(book.id)} />
      ))}
    </div>
  );
}
