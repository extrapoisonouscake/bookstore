import {Link} from 'react-router-dom'
import styles from './index.module.css'
import {MdOutlineShoppingCart} from 'react-icons/md'
export default function Header(){
    return(
        <header className={styles.main}>
            <Link to="/"><p className={styles.heading}>Главная</p></Link>
            <Link to="/cart"><div className={styles.icon}>
                <MdOutlineShoppingCart size={20} color="#fff"/>
            </div></Link>
        </header>
    )   
}