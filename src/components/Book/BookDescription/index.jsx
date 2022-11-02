import styles from './index.module.css';
export default function BookDescription({text}){
    return(
        <div className={styles.main}>
            <h3>Аннотация</h3>
            <p>{text}</p>
        </div>
    )   
}