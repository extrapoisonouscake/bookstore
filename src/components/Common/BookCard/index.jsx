import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import cartSlice from 'store/cart'
import {selectCart} from 'store/cart/selectors'
import cn from 'classnames'
import Counter from "components/Common/Counter";
import Rating from "components/Common/Rating";
import PropTypes from "prop-types";
import styles from "./index.module.css";

export default function BookCard({id, title, count = 0,author, genre, rating, price,isCounterAlignedBottom }) {
  const dispatch = useDispatch();
  return (
    <div className={cn('default-card',styles.main,{[styles["counter-bottom"]]:isCounterAlignedBottom})}>
      <div>
        <Link to={`/book/${id}`}><h3 className={styles.heading}>{title}</h3></Link>
        <p className="text-gray">{author}</p>
        <p className="text-gray">{genre}</p>
        <Rating value={rating} />
        <p className={styles.price}>{price} ₽</p>
      </div>
      <Counter key={count} value={count} callback={(value)=>dispatch(cartSlice.actions.setBookCount({id,count:value}))}/>
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
