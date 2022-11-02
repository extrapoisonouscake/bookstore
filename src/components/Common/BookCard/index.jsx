import cn from 'classnames'
import Counter from "components/Common/Counter";
import Rating from "components/Common/Rating";
import PropTypes from "prop-types";
import styles from "./index.module.css";

export default function BookCard({ title, author, genre, rating, price,isCounterAlignedBottom }) {
  return (
    <div className={cn('default-card',styles.main,{[styles["counter-bottom"]]:isCounterAlignedBottom})}>
      <div>
        <h3 className={styles.heading}>{title}</h3>
        <p className="text-gray">{author}</p>
        <p className="text-gray">{genre}</p>
        <Rating value={rating} />
        <p className={styles.price}>{price} ₽</p>
      </div>
      <Counter />
    </div>
  );
}
BookCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
};
