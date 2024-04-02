const Col = ({d}) => {
  return (
    <div className="col" style={{backgroundImage:`url(${d.img}`}}>
    <div className="offer-content">
        <div className="name">{d.name}</div>
        <h3>{d.text}</h3>
        <div className="btn">Shop Now</div>
    </div>
    </div>
  )
}

export default Col;