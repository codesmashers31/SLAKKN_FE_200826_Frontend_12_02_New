// import { useState } from "react"

import { useState } from "react"


// const App = () => {

//   // console.log('Component Rerendering');
  

//  let counter = 0

//  const [count,setCount] = useState(0)

  
//  const variableUpdate = ()=>{
   
//    counter = counter+1

//    console.log(counter);
   


//  }

//  const stateUpdate = ()=>{

//   setCount(count+1)

//   console.log(count);
  


//  }


//   return (
//     <>
//     <h1>Variable : {counter}</h1>

//      <h1>State: {count}</h1>


//      <button onClick={variableUpdate}>Variable Update</button>
//      <button onClick={stateUpdate}>State Update</button>
//     </>
//   )
// }

// export default App




// const App = () => {
   
//   const [title,setTitle] = useState("React")
//   const [numbers,setNumbers] = useState(0)
//   const [isActive,setIsActive] = useState(true)
//   const [isLogin,setIsLogin] = useState(false)
//   const [isNull,setIsNull] = useState(null)
  
//   const handleClick = ()=>{
//        setTitle("This is the React state Update")
//   }
 
//   const handleCount = ()=>{
//      setNumbers((p)=>p+1)
//   }

//   const handleBoolean = ()=>{

//     setIsActive(!isActive)

    

//   }
//   const handleOptinal = ()=>{

//     setIsLogin(!isLogin)

//   }

//   const handleNull = ()=>{

//     setIsNull(10)
    

//   }




//   return (
//     <>
//     <h1>{title}</h1>
//     <p>{numbers}</p>
//     <p>{isActive?"React":"No React"}</p>
//     {isActive?<p>This is Done</p>:<p>This is Not done</p>}
//     <button onClick={handleClick}>Click Text change</button>
//     <button onClick={handleCount}>Number Count</button>
//     <button onClick={handleBoolean}>{isActive?"This is True":"This is FAlse"}</button>
//     <br /><br /><br />
     
//      {isLogin && <div>
//       This is SHowing
//     </div>}

    

//     <button onClick={handleOptinal}>Change State</button>


//     <br /><br /><br /><br />
//      {isNull?? <div>This is Null so use thsi </div>}
//     <button onClick={handleNull}>Change State</button>

//     </>
    
//   )
// }

// export default App








// const App = () => {

//   const [arr,setArr] = useState([1,2,3,4,5,6,78,9])

//   const handleArr = ()=>{

//     let copy = [...arr]
     
//     // copy[2] = "React"

//     //  copy = copy.filter((e,i)=>e!==3)

//     // copy.push(1,2,3,4,5,6,7,8,9,0)

//     setArr(copy)

//   }

//   return (
//     <>
    
//     <button onClick={handleArr}>Click to change</button>

//     <div>
//       {arr.map((e,i)=>(
//         <p key={i}>{e}</p>
//       ))}
//     </div>
//     </>
//   )
// }

// export default App




// const App = () => {
  
//   const [obj,setObj] = useState({name:"React",subject:"Node"})
  
//   const handleObj = ()=>{

//   //  let objnew = {...obj}

//   //  objnew.name = "JS"

//    setObj({...obj,subject:""})

//   }
//   return (
//     <>
//     <button onClick={handleObj}>Obj update</button>
//     <div>
//       <p>{obj.name}</p>
//       <p>{obj.subject}</p>
//       <p>{obj.price}</p>
//     </div>
//     </>
//   )
// }

// export default App




const App = () => {

  const [arrObj,setObjArr] = useState([{name:"React",subject:"Node"}])
bbbnnnffgggdsaaaqqwertyuiop[[]]nnn
  const handleObjArr = ()=>{

    let copy = [...arrObj]
     
    // copy[2] = {name:"js"}

    //  copy = copy.filter((e,i)=>e!==3)

    copy.push({name:"HTML",subject:"JS"})

    setObjArr(copy)

  }

  return (
    <>
    
    <button onClick={handleObjArr}>Click to change</button>

    <div>
      {arrObj.map((e,i)=>(
        <div key={i}>
          <p>{e.name}</p>
          <p>{e.subject}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App