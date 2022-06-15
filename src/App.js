import { useEffect, useState } from "react";
import Card from "./componens/card";
import Drawer from "./componens/Drawer";
import Header from "./componens/Header";


function App() {

  const [cartOpened, setCartOpened] = useState(false)

  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])

  const [searchValue, setSearchValue] = useState("")

  const onChangeSearch = (event)=>{
    setSearchValue(event.target.value)
    console.log(event.target.value);
  }

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

  const clearSearch = ()=>{
    setSearchValue("")
  }

 
  return (
    <div className="wrapper clear">
    {cartOpened&&<Drawer 
    cartItems= {cartItems} 
    onClouseCart = {()=>{setCartOpened(false)}}

    />}
      <Header onClickCart = {()=>setCartOpened(true)}/>
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

         {items.filter(item=>item.name.toLowerCase().includes(searchValue)).map((obj, index)=>(
          <Card 
          кеу={index}
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
