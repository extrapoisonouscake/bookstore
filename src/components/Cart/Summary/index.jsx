import styles from "./index.module.css";
export default function Summary({ data }) {
  return (
    <div className={styles.main}>
      <h4>Ваш заказ:</h4>
      <ul>
        {data ? (
          data.map((book, i) => (
            <div key={i} className={styles.row}>
              <p>{book.author}</p>
              <p>{book.price} ₽ x {book.count}</p>
            </div>
          ))
        ) : (
          <p>Пока ничего не заказано.</p>
        )}
      </ul>
      <div className={styles.bottom}>
        <p>
          Итого:{" "}
          {data.map(({price,count}) => price * count).reduce((prev, cur) => prev + cur, 0)}{" "}
          ₽
        </p>
        <button>Купить</button>
      </div>
    </div>
  );
}
