import React from 'react'

export default function 
({onClickCart}) {
  return (
    <header className="p-40 align-center d-flex justify-between">
    <div className="d-flex align-center">
    <img width={40} height={40} src="/img/logo.png"/>
    <div>
      <h3 className="text-uppercase">Style shop</h3>
      <p className="opacity-5">Интернет магазин со вкусом</p>
    </div>
    </div>
    <div >
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img width={18} height={18} src="/img/cart.png"/>
          <span>1545</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.png"/>
        </li>
      </ul>
    </div>
  </header>
  )
}
