import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import BoolieanRendering from "./pages/BoolieanRendering"
import NumberRendering from "./pages/NumberRendering"
import Stringrendering from "./pages/Stringrendering"
import Falsey from "./pages/Falsey"


const App = () => {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}   />
      <Route path="/string" element={<Stringrendering/>}   />
      <Route path="/number" element={<NumberRendering/>}   />
      <Route path="/boolean" element={<BoolieanRendering/>}   />
      <Route path="/false" element={<Falsey/>}   />
     </Routes>
    </>
  )
}

export default App