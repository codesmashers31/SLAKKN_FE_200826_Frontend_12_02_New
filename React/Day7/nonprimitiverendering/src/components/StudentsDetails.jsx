

const StudentsDetails = ({newdatas}) => {
  return (
    <>
    <div>
        <h1>{newdatas.name}</h1>
        <p>{newdatas.subject}</p>
        <p>{newdatas.price}</p>
    </div>
    </>
  )
}

export default StudentsDetails