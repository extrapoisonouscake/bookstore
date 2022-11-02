
import styles from './index.module.css'
import {MdOutlineShoppingCart} from 'react-icons/md'
export default function Header(){
    return(
        <header className={styles.main}>
            <p className={styles.heading}>Магазин</p>
            <div className={styles.icon}>
                <MdOutlineShoppingCart size={20} color="#fff"/>
            </div>
        </header>
    )   
}