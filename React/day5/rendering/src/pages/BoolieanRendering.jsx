

const BoolieanRendering = () => {
 
// condition rendering - tornaery Operator
    let isActive = true

// Optional Redendring

    let values = true


  return (
    <>
    <div className='bg-green-300 p-10'>
        <div>
            {/* condition?"true":"false" */}
            {isActive?"This is React":"This is Not React"}
        </div>
        <div>
             {values&&"Top 10 Cinema"}
        </div>
    </div>
    </>
  )
}

export default BoolieanRendering