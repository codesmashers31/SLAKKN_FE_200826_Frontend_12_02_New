const fromData = document.getElementById("formDatas")


const getDatas = ()=>{
       const getData = localStorage.getItem("mydataform")

    console.log(getData);

    const change = JSON.parse(getData)

    console.log(change);


    const datashow = document.getElementById("Showing")

    datashow.innerHTML = `<div>
    
    <p>${change.userid}</p>
    <h1>${change.name}</h1>
    <p>${change.age}</p>
    
    </div>`
}

document.addEventListener("DOMContentLoaded",()=>{

 
    
    getDatas()

})

fromData.addEventListener("submit",(event)=>{

    event.preventDefault()

    const username = document.getElementById("username")
    const userage = document.getElementById("userage")

    const name = username.value
    const age =  userage.value

    if(!name || !age){
        alert("Enter the Form feilds")
        return
    }
    if(age<18){
        alert("Above 18 Only Allowted")
        return
    }

   


    const getData = localStorage.getItem("mydataform")

    const newChage = JSON.parse(getData)

    const adding = newChage || []

    

   const obj = {userid:Date.now(),name,age}




   console.log(obj);
    
   const change = JSON.stringify(obj)

   console.log(change);

   adding.push(change)

   localStorage.setItem("mydataform",adding)

   alert('Successfully Done')

   username.value = ""

   userage.value = ""

   getDatas()
   
   

})

