import cn from "classnames";
import styles from "./index.module.css";
import { useEffect } from "react";
import IconButton from "components/Common/IconButton";
import { useState } from "react";
import PropTypes from "prop-types";

import { IoAdd, IoRemove } from "react-icons/io5";
export default function Counter({ callback }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (callback) callback(count);
  }, [count]);
  return (
    <>
      <div className={styles.main}>
        <IconButton
          icon={<IoRemove />}
          onClick={() => {
            setCount(count - 1);
          }}
          disabled={count === 0}
        />
        <p className={cn("text__gray", styles.count)}>{count}</p>
        <IconButton
          icon={<IoAdd />}
          onClick={() => {
            setCount(count + 1);
          }}
        />
      </div>
    </>
  );
}
Counter.propTypes = {
  callback: PropTypes.func,
};
