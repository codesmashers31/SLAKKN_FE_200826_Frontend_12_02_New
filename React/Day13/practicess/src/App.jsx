// import { useState } from "react";
// import Empylee from "./components/Empylee";

import { useState } from "react";

// const App = () => {

//   const emp = {empName:"Suresh",salary:30000,empcity:"chennai",empmobile:87876876876}
//   const [todo,setTodo] = useState("")

//   const [showdata,setShowData] = useState([])


//   const handleChange = (e) => {

// setTodo(e.target.value)

    
//   };

//   const handleClcik = (e) => {

//     e.preventDefault()
   
//     const copy = [...showdata]

//     copy.push(todo)


//    setShowData(copy)

//    setTodo("")


    
//   };

//  const deletedata = (userid)=>{

//   const copy = [...showdata]


//   const deletdatas = copy.filter((e,i)=>i!==userid)

//   setShowData(deletdatas)

//   // console.log('====================================');
//   // console.log(deletdatas);
//   // console.log('====================================');


//  }

//   return (
//     <>
//       <Empylee  details = {emp}  />


//       <form>
//         <input type="text" onChange={handleChange} value={todo} placeholder="Enter the Task" />
//         <button onClick={handleClcik}>Add</button>
//       </form>


//       <div>
//         {showdata.map((e,i)=>(
//           <div key={i}>
//             <p>{e}</p>
//             <button onClick={()=>deletedata(i)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;




const App = () => {


  const [datas,setDatas] = useState([{productname:"Laptop",price:"1234"},{productname:"Mobile",price:"2345"},{productname:"keyBoard",price:"3456"}])
  
  const [saveDatas,setSaveDatas] = useState(null)


  const addcatrd = (products)=>{

    // const copy = [...saveDatas]
  
    // let count = copy.length

    let count = 0
 
  setSaveDatas(saveDatas+1)

    // copy.push(products)

     
    // setSaveDatas(copy)

    // console.log('====================================');
    // console.log(saveDatas);
    // console.log('====================================');

  }




  return (
    <>
      <div>
       {datas.map((e,i)=>(
        <div key={i}>
          <h1>{e.productname}</h1>
          <p>{e.price}</p>
          <button onClick={()=>addcatrd(i)}>Add to Card</button>
        </div>
       ))}
      </div>




      <h1>Cards</h1>
      <div>
        {/* {saveDatas.map((e,i)=>(
          <div key={i}>

            <p>{e.productname}</p>
            <p>{e.price}</p>

          </div>
        ))} */}

        <h1>{saveDatas}</h1>
      </div>


    
    </>
  );
};

export default App;