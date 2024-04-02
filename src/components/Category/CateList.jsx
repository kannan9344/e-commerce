const CateList = ({pro}) => {
  return (
    <div className="col">
        <img src={pro.img}/>
        <strong>{pro.Name}</strong>
    </div>
  )
}

export default CateList