const arr = []


const btn = document.getElementById("bnt")
const error = document.getElementById("error")

btn.addEventListener('click',()=>{
    
    const taskInput = document.getElementById("task")
    const taskData = taskInput.value.trim()
    if(!taskData){

        error.innerText = "Please Fill the Form"
        error.style.color = "red"

        return
       
    }

    arr.push(taskData)

    alert("Successfully Added")

    taskInput.value =  ""

    taskInput.focus();

    //console.log(arr);



    const showing = document.getElementById("showing")

    let daats = ""


    arr.forEach((e,i)=>{

        daats += `<li>${e}</li>`

    })

showing.innerHTML = daats

    

})