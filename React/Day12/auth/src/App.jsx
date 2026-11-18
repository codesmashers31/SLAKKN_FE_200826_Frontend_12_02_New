import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import DashBoard from "./pages/DashBoard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Product from './pages/Product'
import Todo from './pages/Todo'

import {useState} from 'react'
const App = () => {
 
  const product = {productname:"React",productPrice:2000}

  const [card,setCard] = useState(0)

  const addtocards = ()=>{

    setCard(card+1)

  }

  return (
    <>
    <NavBar addtocart={card}   />
    <Routes>
      <Route path="/dashboard" element={<DashBoard/>} />
       <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
     
    </Routes>

       <Product  newproduct = "hdgdg" productprice = "3000" />

       <Todo/>


       <div>
        <p>Laptop</p>
        <button onClick={addtocards}>Add to Card</button>
       </div>
    </>
  )
}

export default App