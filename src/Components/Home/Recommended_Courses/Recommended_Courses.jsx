import axios from "axios"
import './Recommended_Course.css';
import Card from "./Card";
import { PureComponent } from 'react';

let url = `https://www.udemy.com/api-2.0/courses/?search=cyber&language=en`
let url1 = `https://www.udemy.com/api-2.0/courses/?search=graphic%20design&language=en`
let url2 = `https://www.udemy.com/api-2.0/courses/?search=web%20development&language=en`
let axiosHeaders = {
  headers: {
    "Accept": "application/json, text/plain, */*",
    "Authorization": "Basic Vzc4N0J2SWNhWFFDNW9Jd0tTRWw0YWVTQ3Ixd2tPOGJ5ZTREc3VMWjpzRWkzSHd2b2ZNazlSdFFnTVV0Y1VuSmZEUnlTeXN0UEJScXRBMEF5Y2JQNDNabXRHQzJMNjg4bXVGUU01VUh0Y3NBQ3ROZDZZSzlDNFB5eE94R05sZlFhbU5JZE0zY0xLRDZtUWJtZDFGV290YVdlMW5MU1hMVDl3R1pxRm52Sg==",
    "Content-Type": "application/json; charset=utf-8",

  }
}
class Recommended_Courses extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      cyber: null,
      graphic: null,
      web: null,
      // selectedCourseID: null
    }
  }
  componentDidMount() {
    axios.get(url, axiosHeaders)
      .then(response => {
        this.setState({ cyber: response.data.results })
      })
      .catch(error => console.log(error))

    axios.get(url1, axiosHeaders)
      .then(response => {
        this.setState({ graphic: response.data.results })
      })
      .catch(error => console.log(error))

    axios.get(url2, axiosHeaders)
      .then(response => {
        this.setState({ web: response.data.results })
      })
      .catch(error => console.log(error))
  }
  render() {
    let carousel = <p style={{ textAlign: 'center' }}>Loading Courses...</p>
    if (this.state.cyber != null && this.state.graphic != null && this.state.web != null) {
      carousel = (<div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-touch="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-holder" >
              <Card index={0} course={this.state.graphic} />
              <Card index={1} course={this.state.cyber} />
              <Card index={2} course={this.state.web} />
              <Card index={3} course={this.state.cyber} />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-holder">
              <Card index={4} course={this.state.cyber} />
              <Card index={5} course={this.state.graphic} />
              <Card index={6} course={this.state.graphic} />
              <Card index={7} course={this.state.web} />
            </div>
          </div>
          <div className="carousel-item" >
            <div className="card-holder" >
              <Card index={8} course={this.state.web} />
              <Card index={9} course={this.state.graphic} />
              <Card index={10} course={this.state.cyber} />
              <Card index={11} course={this.state.web} />
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{ width: '5%' }} >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{ width: '5%' }} >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>)
    }
    return (
      <div className="App" style={{marginBottom:"50px"}}>
        <br /><br />
        <h1>Recommended Courses</h1>
        {carousel}
      </div>

    );
  }
}

export default Recommended_Courses;