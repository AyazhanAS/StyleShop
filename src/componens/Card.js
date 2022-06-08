import React from 'react'

export default function Card() {
  return (
    <div>
        
        <div className="card">
        <img width={133} height={112} alt="product" src="img/product/npnn.png"/>
          <h5>Женские нежные кофты</h5>
          <div className="align-center d-flex justify-between">
            <div className="d-flex flex-column">
              
              <span>цена</span>
              <b>458 tg</b>
              
            </div>
            <button className="button"><img alt="Plus" width={11} height = {11} src="img/plus.png"/></button>
          </div>
        </div>
    </div>
  )
}
