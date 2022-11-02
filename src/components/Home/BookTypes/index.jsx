import cn from 'classnames'
import { bookTypes } from "../../../constants/bookTypes";
import styles from "./index.module.css";
export default function BookTypes({ onChoose,chosenIndex }) {
  return (
    <div className={styles.main}>
      {bookTypes.map((type, i) => (
        <div onClick={()=>{onChoose(i)}} key={i}>
          <p className={cn({'text-bold':chosenIndex === i})}>{type}</p>
        </div>
      ))}
    </div>
  );
}
