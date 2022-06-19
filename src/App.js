import { useEffect, useState } from "react";
import Card from "./componens/card";
import Drawer from "./componens/Drawer";
import Header from "./componens/Header";
import axios from "axios"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Favorits from "./pages/Favorits";


function App() {

  const [cartOpened, setCartOpened] = useState(false)

  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])

  const [searchValue, setSearchValue] = useState("")

  const [favorites, setFavorites] = useState([])

  



  useEffect(()=>{


    axios.get("https://62a19fedcd2e8da9b0f58cbd.mockapi.io/items").then(res=>{
      setItems(res.data)
    })

    axios.get("https://62a19fedcd2e8da9b0f58cbd.mockapi.io/cart").then(res=>{
      setCartItems(res.data)
    })

    axios.get("https://62a19fedcd2e8da9b0f58cbd.mockapi.io/favorits").then(res=>{
      setFavorites(res.data)
    })

  },[])

  const onChangeSearch = (event)=>{
    setSearchValue(event.target.value)
 
  }

  const onAddToFavorite =(obj)=>{
    if(favorites.find(objFav=>objFav.id===obj.id)){
      axios.delete(`https://62a19fedcd2e8da9b0f58cbd.mockapi.io/favorites/${obj.id}`)
      setFavorites(prev=>prev.filter(item=>item.id!==obj.id))
    }else{
      axios.post("https://62a19fedcd2e8da9b0f58cbd.mockapi.io/favorites", obj)
      setFavorites(prev=>[...prev, obj])

    }
    
  
  }


  const onAddToCart =(obj)=>{
    
    axios.post("https://62a19fedcd2e8da9b0f58cbd.mockapi.io/cart", obj)
    setCartItems(prev=>[...prev, obj])
  }

  const onRemoveItem=(id)=>{
    axios.delete(`https://62a19fedcd2e8da9b0f58cbd.mockapi.io/cart/${id}`)
    setCartItems(prev=>prev.filter(item=>item.id!==id))
  }


  const clearSearch = ()=>{
    setSearchValue("")
  }

 
  return (
    <div className="wrapper clear">
    {cartOpened&&<Drawer 
    onRemoveItem={onRemoveItem}
    cartItems= {cartItems} 
    onClouseCart = {()=>{setCartOpened(false)}}

    />}
      <Header onClickCart = {()=>setCartOpened(true)}/>
      <Routes>
      <Route path="/" exact element={
         <Home 
         items={items} 
         searchValue={searchValue}  
         clearSearch={clearSearch}
         onChangeSearch={onChangeSearch}
         onAddToCart={onAddToCart}
         onAddToFavorite={onAddToFavorite}
   
         />
   
      }/>
      <Route path="/favorites" element={<Favorits
      items={favorites}
      onAddToFavorite={onAddToFavorite }
      />}>

      </Route>

      </Routes>
     
     
    
    
    </div>
  );
}

export default App;
