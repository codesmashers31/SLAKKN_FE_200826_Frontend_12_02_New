// import React from 'react'

// import {useState} from 'react'

// const Todo = () => {
    
// const [todo,setTodo] = useState("")

// const [savedata,setSaveData] = useState([])


// const handleChange = (e)=>{

//     setTodo(e.target.value)

// }

// const handleClick = (e)=>{

//     e.preventDefault()

//     const datas = [...savedata]

//     datas.push(todo)

//     setSaveData(datas)

//     setTodo("")



// }

// const handleDlete = (userid)=>{


//     const deleteData = [...savedata]

//     const datadelete = deleteData.filter((e,i)=>i!==userid)

//     setSaveData(datadelete)



    
// }


//   return (
//     <>
//      <form>
//         <input type="text" onChange={handleChange} value={todo} placeholder="Enter the Task" />

//         <button onClick={handleClick}>Add</button>
//      </form>

//      <div>
//         {savedata.map((e,i)=>(
//             <div key={i}>
//                 <p>{e}</p>
//                 <button onClick={()=>handleDlete(i)}>Delete</button>
//             </div>
//         ))}
//      </div>

     
//     </>
//   )
// }

// export default Todo





import React from 'react'

import {useState} from 'react'

const Todo = () => {
    
const [feedback,setFeedBack] = useState("")
const [rating,setRating] = useState("")
const [comment,setcomment] = useState("")

const [savedata,setSaveData] = useState([])


const handleFeedback = (e)=>{

    setFeedBack(e.target.value)

}

const handleRating = (e)=>{

    setRating(e.target.value)

}

const handleComment = (e)=>{

    setcomment(e.target.value)


}

const handleClick = (e)=>{

    e.preventDefault()

    const datas = [...savedata]

    const obj = {feedback,rating,comment}

    datas.push(obj)

    setSaveData(datas)

    setFeedBack("")
    setRating("")
    setcomment("")



}

const handleDlete = (userid)=>{


    const deleteData = [...savedata]

    const datadelete = deleteData.filter((e,i)=>i!==userid)

    setSaveData(datadelete)



    
}


  return (
    <>
     <form>
        <input type="text" onChange={handleFeedback} value={feedback} placeholder="Enter the Feedback" />
        <input type="text" onChange={handleRating} value={rating} placeholder="Enter the Rading" />
        <input type="text" onChange={handleComment} value={comment} placeholder="Enter the Comment" />

        <button onClick={handleClick}>Add</button>
     </form>

     <div>
        {savedata.map((e,i)=>(
            <div key={i}>
                <p>{e.feedback}</p>
                <p>{e.rating}</p>
                <p>{e.comment}</p>
                <button onClick={()=>handleDlete(i)}>Delete</button>
            </div>
        ))}
     </div>

     
    </>
  )
}

export default Todo
