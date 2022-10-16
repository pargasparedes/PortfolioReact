import './portfolio.css'

const Portfolio = () => {
  return (
    <div className="portContainer">
      <div className="title"><h1>Portfolio</h1></div>
      {/* // Maybe USE MAP and array for this */}
      <div className="imgContainer">
        <div className="img img1"></div>
        <div className="img img2"></div>
        <div className="img img3"></div>
        <div className="img img4"></div>
        <div className="img img5"></div>
        <div className="img img6"></div>
      </div>
    </div>
  )
}

export default Portfolio