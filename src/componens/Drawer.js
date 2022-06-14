import React from 'react'

export default function Drawer({onClouseCart, cartItems=[]}) {
  return (
    <div className="overlay" >
    <div className="drawer">
      <h2 className="mb-30 d-flex justify-between">Корзина   
        <img className="x  cu-p" src="img/x.svg" alt="x" onClick={onClouseCart}/>
      </h2>
  
      <div className="items">
        {
          cartItems.map(obj=>(
            <div className="cartItem mb-20 d-flex align-center">
            <div className="cartItemImg" style={{backgroundImage:`url(${obj.img})`}}>
            </div>
            <div className="mr-20">
              <p className="mb-5">
                 {obj.name}
              </p>
              <b>
              {obj.price} tg
              </b>
            </div>
            <img className="x" src="img/x.svg" alt="x"/>
          </div>
          ))
        }
  




   
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
