import { useState } from "react"
import Numbers from "./components/Numbers"
import BooleanValues from "./components/BooleanValues"
import Optinonal from "./components/Optinonal"
import Arr from "./components/Arr"
import Obj from "./components/obj"
import ArrObj from "./components/ArrObj"


const App = () => {

  const [datas,setDatas] = useState("This is Text")

  

  const handleText = ()=>{

      setDatas("Thsi is Change Text")

  }

  return (
    <>
      {/* <div>
        <h1>{datas}</h1>
        <button onClick={handleText}>Click</button>
      </div>

      <Numbers/>

      <br />

      <BooleanValues/>

      <Optinonal/>

      <br />

      <Arr/>

      <br />
     <Obj/>

     <br /> */}

     <ArrObj/>
    </>
  )
}

export default App