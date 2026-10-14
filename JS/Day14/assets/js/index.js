const tableshowing = document.getElementById("tablebody")
const showingobj = document.getElementById("showingobj")
const objbnt = document.getElementById("objbnt")
const arrobjshowing = document.getElementById("arrobjshowing")
const objarrbnt = document.getElementById("objarrbnt")
let arr = ["React","Node","JS","MERN"]


let obj = {name:"React",age:20}

let objarr = [{name:"React",age:20},{name:"JS",age:22},{name:"Node",age:23}]


const btn = document.getElementById("btn")


btn.addEventListener("click",()=>{

    let datas = ""

    arr.forEach((e,i)=>{

        datas += `<tr>
        
        <td>${i+1}</td>
        <td>${e}</td>
        
        </tr>`

    })


    tableshowing.innerHTML = datas




})


objbnt.addEventListener("click",()=>{

    

    showingobj.innerHTML = `<div>
    
    
     <h2>${obj.name}</h2>
     <p>${obj.age}</p>
    
    </div>`

})



objarrbnt.addEventListener("click",()=>{

    let datas = ""

    objarr.forEach((e,i)=>{

        datas += `<tr>
        
        <td>${i+1}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        
        </tr>`

    })


    arrobjshowing.innerHTML = datas




})