import Rating from 'components/Common/Rating'
import cn from 'classnames';
import styles from './index.module.css'
export default function BookReview({name,rate,text}){
    return(
        <div className={cn('default-card',styles.main)}>
            <div className={styles.top}><h3>{name}</h3>
            <Rating value={rate}/>
            </div>
            <p>{text}</p>
        </div>
    )
}