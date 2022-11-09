import getBookRating from "helpers/getBookRating";
import styles from "./index.module.css";
import Summary from "components/Cart/Summary";
import { useSelector } from "react-redux";
import BookCard from "components/Common/BookCard";
import { selectCart } from "store/cart/selectors";
import { selectBooks } from "store/books/selectors";
export default function Cart() {
  const { books:order} = useSelector(selectCart);
  const books = useSelector(selectBooks);
  let itemsToDisplay = [];
  for (const itemId in order) {
    if(order[itemId] === 0) continue;
    itemsToDisplay.push({ ...books.entities[itemId], id: itemId,count:order[itemId] });
  }
  if(!itemsToDisplay || itemsToDisplay.length === 0) return <p>Вы пока ничего не добавили в корзину.</p>;
  return (
    <>
      <h2>Корзина</h2>
      <div className={styles.content}>
        <Summary data={itemsToDisplay} />
        <div className={styles.books}>
          {itemsToDisplay.map((book, i) => (
            <BookCard key={i} {...book} count={order[book.id]} rating={getBookRating(book.id)} />
          ))}
        </div>
      </div>
    </>
  );
}
