import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({addtocart}) => {


 const [shwoDatas,setShowiDatas] = useState(null)

 useEffect(()=>{

   const datas = JSON.parse(localStorage.getItem("isActive"))

   setShowiDatas(datas)
    

 },[])

  return (
    <>
    <div className='bg-amber-300 p-3 flex justify-between items-center'>
        <div>
            Logo
        </div>
        <div className='flex gap-10'>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/"}>{shwoDatas==null?"Home":shwoDatas.userName}</Link>
            <p>{addtocart}</p>
        </div>
    </div>
    </>
  )
}

export default NavBar