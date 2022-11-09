import styles from "./index.module.css";
import BookReview from "../BookReview";
export default function BookReviews({ reviews }) {
  
  return (
    <div className={styles.main}>
      {reviews.length > 0 ? (
        reviews.map((review, i) => <BookReview key={i} {...review} />)
      ) : (
        <h2>Отзывов пока нет.</h2>
      )}
    </div>
  );
}
