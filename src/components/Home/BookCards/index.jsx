import {useDispatch,useSelector} from 'react-redux'
import loadBooksIfNotExist  from 'store/books/loadBooks';
import styles from './index.module.css';
import BookCard from "components/Common/BookCard";
import { useEffect } from 'react';
import getBookRating from 'helpers/getBookRating';
import {selectBooks} from 'store/books/selectors';
import {selectCart} from 'store/cart/selectors';
export default function BookCards({typeIndex}) {

  const books = useSelector(selectBooks)

  const cart = useSelector(selectCart);
  
  if(books.ids.length === 0) return null;
  const filteredBooks = []
  for(const index of books.ids){
    const book = books.entities[index];
    if(book.category === typeIndex + 1){
      filteredBooks.push(book)
    }
  }
  return (
    <div className={styles.main}>
      {filteredBooks.map((book, i) => (
        <BookCard key={i} {...book} count={cart.books[book.id] || 0} rating={getBookRating(book.id)} />
      ))}
    </div>
  );
}
