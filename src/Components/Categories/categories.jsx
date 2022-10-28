import axios from 'axios'
import { PureComponent } from 'react'
import CourseTile from './CourseTile'
let axiosHeaders = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json, text/plain, */*",
        "Authorization": "Basic Vzc4N0J2SWNhWFFDNW9Jd0tTRWw0YWVTQ3Ixd2tPOGJ5ZTREc3VMWjpzRWkzSHd2b2ZNazlSdFFnTVV0Y1VuSmZEUnlTeXN0UEJScXRBMEF5Y2JQNDNabXRHQzJMNjg4bXVGUU01VUh0Y3NBQ3ROZDZZSzlDNFB5eE94R05sZlFhbU5JZE0zY0xLRDZtUWJtZDFGV290YVdlMW5MU1hMVDl3R1pxRm52Sg==",
        "Content-Type": "application/json; charset=utf-8",
    }
}
class Categories extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            courses: null
            // selectedCourseID: null
        }
    }
    url = `https://www.udemy.com/api-2.0/courses/?page_size=16&search=${this.props.props}&language=en`
    componentDidMount() {
        if (this.state.courses == null) {
            axios.get(this.url, axiosHeaders)
                .then(response => {
                    this.setState({ courses: response.data.results })
                })
                .catch(error => console.log(error))
        }
    }
    render() {
        let courses = <p style={{ textAlign: 'center' }}>Loading Courses...</p>
        if (this.state.courses != null) {
            courses = (
                <>
                    {
                        this.state.courses.map((cours, index) =>
                            <CourseTile
                                key={index}
                                image={cours.image_480x270}
                                title={cours.title}
                                headline={cours.headline}
                            />)
                    }
                </>
            )
        }
        return (
            <div className="container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>
                <h3 style={{
                    width: "100%",
                    margin: "50px",
                    fontWeight: "700",
                    fontSize: "36px"
                }}><i>{this.props.props}</i></h3>
                {courses}
            </div>
        )
    }
}

export default Categories