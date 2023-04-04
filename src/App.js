import "./App.css";
// import NavBar from "./Components/NavBar/NavBar";
import NavTar from "./Components/NavBar/NavTar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./Components/CartView/CartContainer";
import CartContextProvider from "./Context/CartContext";
import Checkout from "./Components/Checkout/Checkout";
import CheckoutForm from "./Components/CheckoutForm/CheckoutForm";
import Info from "./Components/QuienesSomos/Info";


function App() {

  

  return (
    <div className="App">
      <CartContextProvider>
         <BrowserRouter>
        <NavTar className/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detalle/:id/:cat" element={<ItemDetailContainer />} />
          <Route path="/categoria/:cat" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkoutForm" element={<CheckoutForm/>}/>
          <Route path="/checkout/:orderid" element={<Checkout/>}/> 
          <Route path="*" element={<h1>Te perdiste</h1>}/>
          <Route path="/quinesSomos!" element={<Info/>}/>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
     
    </div>
  ); 
}

export default App;
