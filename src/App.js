import { useEffect, useState } from "react";
import Card from "./componens/card";
import Drawer from "./componens/Drawer";
import Header from "./componens/Header";


function App() {

  const [cartOpened, setCartOpened] = useState(false)

  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])

  const onAddToCart =(obj)=>{
    setCartItems(prev=>[...prev, obj])
  }



  useEffect(()=>{
    fetch("https://62a19fedcd2e8da9b0f58cbd.mockapi.io/items")
    .then((res)=>{
      return res.json()
    }).then(json=>{
      setItems(json)
    })

  },[])

 
  return (
    <div className="wrapper clear">
    {cartOpened&&<Drawer 
    cartItems= {cartItems} 
    onClouseCart = {()=>{setCartOpened(false)}}

    />}
      <Header onClickCart = {()=>setCartOpened(true)}/>
      <div className="content p-40">
        <div className="mb-40 justify-between d-flex align-center">
        <h1 className=" ">Все товары</h1>
        <div className="search-block d-flex">
          <img alt="search" src="/img/search.svg"/>
          <input placeholder="search"/>

        </div>
          
        </div>
      

        <div className="d-flex flex-wrap">

         {items.map(obj=>(
          <Card 
          name = {obj.name}
          price = {obj.price}
          img = {obj.img}
          onPlus = {(e)=>onAddToCart(e)}
          
          />
         ))}
         
          
    


        </div>
      
      </div>
     
    </div>
  );
}

export default App;
