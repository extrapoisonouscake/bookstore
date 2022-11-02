import styles from './index.module.css'
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { IoStar, IoStarOutline } from "react-icons/io5";
export default function Rating({ value }) {
  return (
    <div className={styles.main}>
      {[...Array(value)].map((_, i) => (
        <IconContext.Provider key={i} value={{ color: "var(--gray)" }}>
          <IoStar />
        </IconContext.Provider>
      ))}
      {[...Array(5 - value)].map((_, i) => (
        <IconContext.Provider key={i} value={{ color: "var(--gray)" }}>
          <IoStarOutline />
        </IconContext.Provider>
      ))}
    </div>
  );
}
Rating.propTypes = {
  value: PropTypes.number,
};
