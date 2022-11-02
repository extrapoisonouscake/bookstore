import {useState} from 'react';
import BookCards from 'components/Home/BookCards';
import styles from './index.module.css'
import BookTypes from 'components/Home/BookTypes'
export default function Home(){
    const [typeIndex,setTypeIndex] = useState(0)
    return(
        <div className={styles.main}>
        <BookTypes chosenIndex={typeIndex} onChoose={setTypeIndex}/>
        <BookCards typeIndex={typeIndex}/>
        </div>
    )
}