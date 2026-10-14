<<<<<<< HEAD

// let students = ["React","Node","SQL","MongoDB","JS"]

// let list = document.getElementById("studata")

// const arrayRendering = ()=>{
   
//     list.innerHTML = ""

     
//     students.forEach((stu,i)=>{

//         let li = document.createElement("li")

//         li.textContent = stu
       
//         list.append(li)


//     })
    


// }

// const btn = document.getElementById("btn")

// btn.addEventListener('click',()=>{
// arrayRendering()
// })










let students = ["React","Node","SQL","MongoDB","JS"]

let obj = {name:"React",age:20,course:"JS"}


const btn = document.getElementById("btn")

const tbodydata = document.getElementById("tablebody")


const divdata = document.getElementById("showing")

btn.addEventListener('click',()=>{

    let data = ""
    
    students.forEach((e,i)=>{

        data += `<tr>
        
        <td>${i+1}</td>
        <td>${e}</td>
        
        </tr>`

    })


    tbodydata.innerHTML = data


   
 divdata.innerHTML = `<div>
 
 <h1>${obj.name}</h1>
 <p>${obj.age}</p>
 <p>${obj.course}</p>
 
 </div>`


     
})





=======
const btnData = document.getElementById("btn")

const title = document.getElementById("title")

const imgs = document.getElementById("imgs")

const datas = document.querySelector("#datas")

const link = document.getElementById("link")



btnData.addEventListener("click",()=>{

//    datas.style.display = "none"

   if(datas.style.display ==="block"){
     datas.style.display = "none"
     btnData.innerText = "Show"

   }else{
    datas.style.display = "block"
    btnData.innerText = "Hide"
   }

   
  

})

link.style.cursor = "pointer"
link.style.backgroundColor = "blue"
link.style.color = "white"
link.style.padding = "10px"
link.style.borderRadius = "5px"

link.addEventListener('click',()=>{

    window.location.href = "intro.html"
})
>>>>>>> 31815245bd55a4d16b512586151d82b3e52a542d
