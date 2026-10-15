
const loginform = document.getElementById("loginform")


loginform.addEventListener("submit",(event)=>{

    event.preventDefault()

    
    const useremail = document.getElementById("useremail")
    const userpassword = document.getElementById("userpassword")

  
    const email =     useremail.value
    const password =  userpassword.value

    const findData = datas.find((e)=>e.email ==email) 
    
    console.log(findData);
    
   
})