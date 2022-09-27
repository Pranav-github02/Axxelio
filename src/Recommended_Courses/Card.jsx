import './Recommended_Course.css';
const Card = ({ course, index }) => {
  return (
    <div className="card" >
      <img src={`${course[index].image_480x270}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{course[index].title}</h5>
        <p className="card-text">{course[index].visible_instructors[0].title}</p>
        <p className="card-text">4.5 <i className="fa-sharp fa-solid fa-star" style={{ color: 'gold' }}></i></p>
        <p className="card-text">{course[index].price}</p>
        {/* <a href="#" className="btn btn-primary">Go Somewhere</a> */}
      </div>
    </div>
  )
}

export default Card;