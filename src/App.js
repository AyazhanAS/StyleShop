

function App() {
  return (
    <div className="wrapper clear">
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
            <li className="mr-30">
              <img width={18} height={18} src="/img/cart.png"/>
              <span>1545</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.png"/>
            </li>
          </ul>
        </div>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все товары</h1>

        <div className="d-flex">
        <div className="card">
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
        <img width={133} height={112} alt="product" src="img/product/bluzka_3.jpg"/>
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
        </div>


        </div>
      
      </div>
     
    </div>
  );
}

export default App;
