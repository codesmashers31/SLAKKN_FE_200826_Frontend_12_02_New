

const Products = ({mydatas}) => {


  return (
    <>
    <div className="bg-amber-300 p-10 flex justify-between items-center">
        {mydatas.map((e,i)=>(
            <div key={i} className="bg-white p-2 w-40 h-40 ">
                <h1>{e.name}</h1>
                <p>{e.price}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default Products