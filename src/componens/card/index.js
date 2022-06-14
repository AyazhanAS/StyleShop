import React, { useState } from 'react'
import styles from "./card.module.scss"

export default function Card({name, price, img, onFavorite, onPlus}) {

  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus = () =>{
    onPlus({name, price, img})
    
    setIsAdded(!isAdded)
  }

  return (
    <div>
        
        <div className={styles.card}>
        <img width={133} height={112} alt="product" src={img}/>
          <h5>{name}</h5>
          <div className="align-center d-flex justify-between">
            <div className="d-flex flex-column">
              
              <span>цена</span>
              <b>{price} tg</b>
              
            </div>
            <img onClick = {onClickPlus} className={styles.plus} alt="Plus" width={11} height = {11} src={isAdded?"img/checked.svg":"img/plus.png"}/>
          </div>
        </div>
    </div>
  )
}
