import React from 'react'

const Falsey = () => {

    // Nullish Coalescing


    let falsy = null

    

  return (
    <>
    <div>
        <div>
            <h1>
                {falsy??"React"}
            </h1>
        </div>
    </div>
    </>
  )
}

export default Falsey