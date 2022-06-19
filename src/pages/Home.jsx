import React from 'react'
import Card from '../componens/card'

export default function Home({items, searchValue, clearSearch, onChangeSearch, onAddToCart, onAddToFavorite}) {
  return (
    <div className="content p-40">
        <div className="mb-40 justify-between d-flex align-center">
        <h1 className=" ">{searchValue?`Поиск по ${searchValue}`:"Все товары"}</h1>
        <div className="search-block d-flex">
          <img alt="search" src="/img/search.svg"/>
          <input placeholder="search" onChange={onChangeSearch} value={searchValue}/>
          {searchValue&&<img onClick={clearSearch} className="x  cu-p" src="img/x.svg" alt="x"/>}
          
        </div>
          
        </div>
      

        <div className="d-flex flex-wrap">

         {items.filter(item=>item.name.toLowerCase().includes(searchValue)).map((item, index)=>(
          <Card 
          кеу={index}
       {...item}
          onPlus = {(obj)=>onAddToCart(obj)}
          onFavorite={obj=>onAddToFavorite(obj)}
         
          
          />
         ))}
         
          
    


        </div>
      
      </div>
     
  )
}
