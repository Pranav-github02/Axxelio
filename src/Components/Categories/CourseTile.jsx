import React from "react"
const CourseTile = ({ title, image, headline }) => {
    return (
        <div className="card shadow-lg p-3 mb-5 bg-body rounded" style={{
            width: "20rem",margin:"0"
        }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{headline}</p>
                <hr />
                <div style={{
                    display: "flex",
                    justifyContent: 'flex-start'
                }}>
                    <h5 style={{ margin: "0%" }}>4.3</h5>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
    )
}

export default CourseTile
