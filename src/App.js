import Card from "./componens/card";
import Drawer from "./componens/Drawer";
import Header from "./componens/Header";


function App() {

  const arr =[{"title": "Платье для праздника", "price":178700000, "img":"/img/product/dress_1.jpg"},
  {"title": "Дизайнерская кофточка", "price":10004500, "img":"/img/product/bluzka_1.webp"},
  {"title": "Наряд для работы", "price":104547, "img":"/img/product/bluzka_2.jpg"},
  {"title": "Вот это красота", "price":78780000, "img":"/img/product/dress_2.webp"}]
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
        <div className="mb-40 justify-between d-flex align-center">
        <h1 className=" ">Все товары</h1>
        <div className="search-block d-flex">
          <img alt="search" src="/img/search.svg"/>
          <input placeholder="search"/>

        </div>
          
        </div>
      

        <div className="d-flex">

         {arr.map(obj=>(
          <Card 
          title = {obj.title}
          price = {obj.price}
          img = {obj.img}
          />
         ))}
         
          
        {/* <div className="card">
          <div className="favorite">
          <img alt="like" src="img/like.svg"/>
          </div>
          
        <img width={133} height={112} alt="product" src="img/product/bluzka_2.jpg"/>
          <h5>Женские нежные кофты</h5>
          <div className="align-center d-flex justify-between">
            <div className="d-flex flex-column">
              
              <span>цена</span>
              <b>458 tg</b>
              
            </div>
            <button className="button"><img alt="Plus" width={11} height = {11} src="img/plus.png"/></button>
          </div>
        </div>

        

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

        <div className="card">
        <img width={133} height={112} alt="product" src="img/product/bluzka_5.jpg"/>
          <h5>Женские нежные кофты</h5>
          <div className="align-center d-flex justify-between">
            <div className="d-flex flex-column">
              
              <span>цена</span>
              <b>458 tg</b>
              
            </div>
            <button className="button"><img alt="Plus" width={11} height = {11} src="img/plus.png"/></button>
          </div>
        </div> */}


        </div>
      
      </div>
     
    </div>
  );
}

export default App;
