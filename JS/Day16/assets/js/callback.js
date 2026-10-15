// const add = ()=>{

//     console.log('Running');
    
// }


// const using = (callback)=>{

//     callback()

// }

// using(add)








// const datas = (newcb)=>{

// console.log('This process afetr ');

// newcb()


// }

// datas(()=>{
//       let arr = [12,12,34]
//     let newarrr = []
//     for(let a=0;a<arr.length;a++){
        
//         arr[a] = arr[a]*2
        
//         newarrr[newarrr.length] = arr[a]   
//     }

//     console.log(newarrr);
// })


// let arr = [12,12,34]


// const sq = arr.map((e)=>e*2)

// console.log(sq);



// setTimeout(()=>{
// console.log('start');
// setTimeout(()=>{
// console.log("Process");
// setTimeout(()=>{
// console.log('END');
// },2000)
// },1000)
// },2000)

const promise = new Promise((resolve,reject)=>{

     
    if(!true){
        resolve("Start")
    }else{
        reject("error")
    }



})


// console.log(promise);


promise.then((data)=>{
   console.log(data);
   
}).catch((e)=>{
    console.log(e);
    
}).finally(()=>{
    console.log('running final');
    
})



const add = async()=>{

    console.log('ruunig');

    const datas = await console.log("RUnning");
    
    

}

console.log(add());

