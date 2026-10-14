const myData = []


const formData = document.getElementById("formData")


const showingData = ()=>{
   const showing = document.getElementById("showing")


    let datas = ""

    myData.forEach((e,i)=>{

        
        datas += `<tr>
        
        
        <td>${i+1}</td>
        <td>${e.userid}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.email}</td>
        
        
        </tr>`
        


    })

    showing.innerHTML = datas
 

}

formData.addEventListener('submit',(event)=>{

    event.preventDefault()

    const username = document.getElementById("username").value
    const userage = document.getElementById("userage").value
    const useremail = document.getElementById("useremail").value

    if(!username || !userage || !useremail){

        alert("Please Fill the Form")
        return
    }

    if(userage<18){

        alert("Age Must Be Above 18")
        return

    }

    const obj = {userid:Date.now(),name:username,age:userage,email:useremail}

    myData.push(obj)

    alert("Succfully Register")

    formData.reset()

    console.log(myData);

    showingData()
    

})


// step 1 : html - form - one input - click - button. 
// step 2 : js - arr - input - button - addEventListener - 

