import React from 'react'
import Card from '../componens/card'


export default function Favorits({items, onAddToFavorite}) {
  return (
    <div  className="content p-40">
        <h1 className="mb-40 justify-between d-flex align-center">
            Выбранные товары
        </h1>
        <div className="d-flex flex-wrap">

{items.map((item, index)=>(
 <Card 
 кеу={index}
 {...item}
 favorited={true}
 onFavorite={onAddToFavorite}
 

 
 />
))}

 



</div>

    </div>
  )
}
