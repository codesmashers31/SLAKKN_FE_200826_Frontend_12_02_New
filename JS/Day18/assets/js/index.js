const FetchDatas = async ()=>{
    
    const getData = await fetch("https://dummyjson.com/users")

    // console.log(getData);
    const change = await getData.json()

    //console.log(change.users);

    const datas = change.users

    const ShowData_tbody = document.getElementById("showdata") 

    let getshow = ""

    datas.forEach((e)=>{
        getshow += `<tr>
        
        <td>${e.id}</td>
        <td>${e.firstName}</td>
        <td>${e.age}</td>
        </tr>`
    });
    
    ShowData_tbody.innerHTML = getshow 


}


FetchDatas()