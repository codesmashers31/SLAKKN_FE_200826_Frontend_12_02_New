// import { useState } from "react";

import { useState } from "react"


// const App = () => {

//   const [datas,setDatas] = useState("")
//   const [showDatas,setShowDatas] = useState(null)

//   const handleChange = (e)=>{

//     // console.log(e.target.value);
    
//     setDatas(e.target.value)
    

//   }

//   const handleClick = (e)=>{

//     e.preventDefault()

//     if(datas%2==0){
//       setShowDatas("Even Number")
//     }else{
//       setShowDatas("Odd number")
//     }

//   }

//   return (
//     <>
//     <div>
//       <form>
//         <input type="text" onChange={handleChange}   />
//         <button onClick={handleClick}>Submit</button>
//       </form>

//       <div>
//         <h1>{showDatas}</h1>
//       </div>
//     </div>
//     </>
//   )
// }

// export default App




const App = () => {

  const [showName,setShowName] = useState("")
  const [showAge,setShowAge] = useState("")
  const [showNumber,setShowNumber] = useState("")
  const [showDatas,setShowDatas]= useState([])

  const handleChangeName = (e)=>{

    setShowName(e.target.value)

  }
  const handleChangeage = (e)=>{

    setShowAge(e.target.value)
    
  }
  const handleChangeNumber = (e)=>{
      setShowNumber(e.target.value)
  }

  const handleClick = (e)=>{

    e.preventDefault()


    if(!showName || !showAge || !showNumber){
      alert("FIll the form")
      return
    }

    let datas = {id:Date.now(),name:showName,age:showAge,numbers:showNumber}
    
    let copy = [...showDatas]

    copy.push(datas)
    
    setShowDatas(copy)

    setShowName("")
    setShowAge("")
    setShowNumber("")


  }

  return (
    <>
    <form>
      <input type="text" placeholder="Enter the Name" value={showName} onChange={handleChangeName} />
      <input type="text" placeholder="Enter the Age" value={showAge} onChange={handleChangeage} />
      <input type="text" placeholder="Enter the Mobile" value={showNumber} onChange={handleChangeNumber} />
      <button onClick={handleClick}>Register</button>
    </form>

    <div>
      <table>
        <thead>
          <tr>
            <th>
              S.NO
            </th>
            <th>Name</th>
            <th>Age</th>
            <th>Number</th>
          </tr>
        </thead>

        <tbody>
            {showDatas.map((e,i)=>(
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.numbers}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App