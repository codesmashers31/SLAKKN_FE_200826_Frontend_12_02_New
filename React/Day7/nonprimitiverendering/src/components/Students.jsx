

const Students = ({datas}) => {

    // console.log(datas);
    

    
  return (
    <>
    <div className="bg-blue-500 text-white p-10 gap-15 flex justify-center items-center">
      {datas.map((e,i)=>(
        <div key={i} className="bg-amber-50 rounded text-black p-3 h-80 w-60">
             <img src={e.imgs} alt="" className='w-40' />
             <h3>{e.name}</h3>
             <p>{e.subject}</p>
             <p>{e.price}</p>
             <button className='bg-blue-300 my-3 rounded p-1 w-30'>Buy Now</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Students