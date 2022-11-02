import {IconContext} from 'react-icons'
import styles from "./index.module.css";
export default function IconButton({ icon, onClick = ()=>{},  ...otherProps }) {
  return (
    <button className={styles.main} onClick={onClick} {...otherProps}>
     <IconContext.Provider value={{ color: "#fff",width:'100%',height:'100%'}}>{icon}</IconContext.Provider>
    </button>
  );
}
