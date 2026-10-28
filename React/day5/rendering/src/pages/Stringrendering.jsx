import { Link } from "react-router-dom"


const Stringrendering = () => {

  let title_datas = "Dhanush"

  let numberData = 2028

  return (

    <>
    <div className="bg-green-400 font-bold p-2">
        
        <div className="flex gap-15 mx-15 items-center justify-center h-100">
          
          <h1 className="mt-3 bg-white text-center w-35 h-25 p-4">Sring Rendering <Link to={"/"} className="bg-black text-white rounded w-30 p-2">Back</Link></h1>
           
           <div>
            <h2>This is TN Government</h2>
            <p>The Chief Minister of Tamil Nadu in 2026 is {title_datas} of the Tamilaga Vettri Kazhagam (TVK). He assumed office on May 10, {numberData}.</p>
            <p>Longest-Serving CM: M. Karunanidhi (over 18–19 years across multiple <span className="bg-white p-2 ">{numberData}</span> terms {title_datas})</p>

            <p>{title_datas}</p>
           </div>

        </div>
    </div>
    </>
  )
}

export default Stringrendering