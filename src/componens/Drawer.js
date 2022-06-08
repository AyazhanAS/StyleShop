import React from 'react'

export default function Drawer() {
  return (
    <div className="overlay" style={{display:"none"}}>
    <div className="drawer">
      <h2 className="mb-30 d-flex justify-between">Корзина   
        <img className="x  cu-p" src="img/x.svg" alt="x"/>
      </h2>
  
      <div className="items">
        <div className="cartItem mb-20 d-flex align-center">
        <div className="cartItemImg" style={{backgroundImage:"url(img/product/bluzka_3.jpg)"}}>
        </div>
        <div className="mr-20">
          <p className="mb-5">
             Beautiful
          </p>
          <b>
          1245tg
          </b>
        </div>
        <img className="x" src="img/x.svg" alt="x"/>
      </div>




      <div className="cartItem mb-20 d-flex align-center">
        <div className="cartItemImg" style={{backgroundImage:"url(img/product/bluzka_3.jpg)"}}>
      </div>
      <div className="mr-20">
        <p className="mb-5">
          Beautiful
        </p>
        <b>
          1245tg
        </b>
      </div>
      <img className="x" src="img/x.svg" alt="x"/>
    </div>

  </div>


  <div  className="cartTotalBlock">
      <ul>
        <li>
          <span>Итого</span>
          <div></div>
          <b>45756тг</b>
        </li>
        <li>
          <span>Налог 5%</span>
          <div></div>
          <b>45487тг</b>
        </li>
      </ul>
      <div>
      <button  className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="arrow"/></button>
      </div>
      
    </div>
   



</div>

  </div>
  )
}
