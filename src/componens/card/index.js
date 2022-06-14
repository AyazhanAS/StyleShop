import React from 'react'
import styles from "./card.module.scss"

export default function Card({title, price, img}) {
  return (
    <div>
        
        <div className={styles.card}>
        <img width={133} height={112} alt="product" src={img}/>
          <h5>{title}</h5>
          <div className="align-center d-flex justify-between">
            <div className="d-flex flex-column">
              
              <span>цена</span>
              <b>{price} tg</b>
              
            </div>
            <button onClick = {()=>alert(title )} className={styles.button}><img alt="Plus" width={11} height = {11} src="img/plus.png"/></button>
          </div>
        </div>
    </div>
  )
}
