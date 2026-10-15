


// const datas = []


const registerData = (event)=>{

    event.preventDefault()

    const username = document.getElementById("username")
    const useremail = document.getElementById("useremail")
    const userpassword = document.getElementById("userpassword")

    const name =      username.value
    const email =     useremail.value
    const password =  userpassword.value

    if(!name || !email || !password){
        alert("Enter the Form feilds")
        return
    }
    // if(age<18){
    //     alert("Above 18 Only Allowted")
    //     return
    // }


   const obj = {userid:Date.now(),name,email,password}

   const datas  = JSON.parse(localStorage.getItem("registers")) || []

 
   datas.push(obj)

   localStorage.setItem("register",JSON.stringify(datas))



   alert('Successfully Done')

   username.value = ""

   useremail.value = ""

   userpassword .value = ""

   document.location.href = "login.html"
   
   



}






const loginProcess = (event)=>{

    event.preventDefault()

    
    const useremail = document.getElementById("useremail")
    const userpassword = document.getElementById("userpassword")

  
    const email =     useremail.value
    const password =  userpassword.value

    //console.log(datas);

    const datas = JSON.parse(localStorage.getItem("register"))
    

    const findData = datas.find((e)=>e.email ==email) 
    
    console.log(findData);

    if(findData.email == email  && findData.password === password){
        document.location.href = "dashboard.html"
    }else{
        alert("Your Not A valid user")
    }
    
   
}
