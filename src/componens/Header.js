import React from 'react'
import { Link } from 'react-router-dom'

export default function 
({onClickCart}) {
  return (
    <header className="p-40 align-center d-flex justify-between">
    <div className="d-flex align-center">
    <img width={40} height={40} src="/img/logo.png"/>
    <Link to="/">
    <div>
      <h3 className="text-uppercase">Style shop</h3>
      <p className="opacity-5">Интернет магазин со вкусом</p>
    </div>
    </Link>
    
    </div>
    <div >
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img width={18} height={18} src="/img/cart.png" alt='cart'/>
          <span>1545</span>
        </li>
        <li>
          <Link to="/favorites">
          <img width={18} height={18} src="/img/unlike.png" alt='heart'/>
          </Link>
          
        </li>
        <li>
          <img width={18} height={18} src="/img/user.png" alt='user'/>
        </li>
      </ul>
    </div>
  </header>
  )
}
