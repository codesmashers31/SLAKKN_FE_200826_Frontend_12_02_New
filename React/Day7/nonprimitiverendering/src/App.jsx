

// const App = () => {

import Products from "./components/Products"
import StudentsDetails from "./components/StudentsDetails"

//   const arr = [1,2,3,4,5,6,7]

//   const copy = [...arr]
  

//   return (
//     <>
//     <div>
//       {arr.map((e,i)=>(

//         <div key={i}>
//           <p>{e}</p>
//         </div>

//       ))}
//     </div>
//     </>
//   )
// }

// export default App







// const App = () => {

//   const obj = {name:"React",subject:"Node",price:2000}

//   return (
//     <>
//     {/* <div>
//       <h1>{obj.name}</h1>
//       <p>{obj.subject}</p>
//       <p>{obj.price}</p>
//     </div> */}

//     <StudentsDetails  newdatas = {obj}  />

//     </>
//   )
// }

// export default App


// import logo from './assets/hero.png'
// import Students from './components/Students'

// const App = () => {

//   const arrobj = [

//       {name:"React",subject:"Node",price:2000,imgs:logo},
//       {name:"Node",subject:"Node 1",price:3000,imgs:logo},
//       {name:"JS",subject:"Node 2",price:5000,imgs:logo},
//       {name:"HTML",subject:"Node 3",price:4000,imgs:logo}

//   ]

//   return (
//     <>
    
//     <Students datas={arrobj}   />

//     <br /><br />
//     {/* <div>
//       {arrobj[3].name}
//     </div> */}
//     </>
//   )
// }

// export default App












const App = () => {

  const datas = [{name:"Datas",price:10000},{name:"Phone",price:100000},{name:"Iphone",price:100000},{name:"Laptop",price:1000000}]

  return (
    <>
    <Products mydatas={datas}  />
    </>
  )
}

export default App