import { Link } from "react-router-dom"


const Banner = () => {
  return (
    <>
    <div className="bg-amber-300 font-thin p-2">
        <div className="flex gap-15 mx-15">
            <Link to="/string" className="bg-white p-2 rounded-2xl w-50 text-center">String Rendering</Link>
            <Link to="/number" className="bg-white p-2 rounded-2xl w-50 text-center">Number Rendering</Link>
            <Link to="/boolean" className="bg-white p-2 rounded-2xl w-50 text-center">Boolean Rendering</Link>
            <Link to="/false" className="bg-white p-2 rounded-2xl w-50 text-center">Falsy Rendering</Link>
        
        </div>
    </div>
    </>
  )
}

export default Banner