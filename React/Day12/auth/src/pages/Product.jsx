import React from 'react'

const Product = ({newproduct,productprice}) => {

   

  return (
    <div>
       <p>{newproduct}</p> 
       <p>{productprice}</p>  
    </div>
  )
}

export default Product
