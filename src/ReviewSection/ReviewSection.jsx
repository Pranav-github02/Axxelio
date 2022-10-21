import './ReviewSection.css';

function ReviewSection() {
  return (
    <div className='student'>
      <h3 className="heading">Student Feedback</h3>
      <p></p>
      <p></p>
      <div >
        <div class="row">
          <div class="col-4">
            <h1 id="rating" >4.0</h1>
            <span class="fa fa-star star checked"></span>
            <span class="fa fa-star star checked"></span>
            <span class="fa fa-star star checked"></span>
            <span class="fa fa-star star checked"></span>
            <span class="fa fa-star star "></span>

            <h5 className='course_Rating'>Course Rating</h5>
          </div>
          <div class="col-8">
            <div class="row">
              <div class="side">
                <div>5 star</div>
              </div>
              <div class="middle">
                <div class="bar-container">
                  <div class="bar-5"></div>
                </div>
              </div>
              <div class="side right">
                <div>150</div>
              </div>
              <div class="side">
                <div>4 star</div>
              </div>
              <div class="middle">
                <div class="bar-container">
                  <div class="bar-4"></div>
                </div>
              </div>
              <div class="side right">
                <div>63</div>
              </div>
              <div class="side">
                <div>3 star</div>
              </div>
              <div class="middle">
                <div class="bar-container">
                  <div class="bar-3"></div>
                </div>
              </div>
              <div class="side right">
                <div>15</div>
              </div>
              <div class="side">
                <div>2 star</div>
              </div>
              <div class="middle">
                <div class="bar-container">
                  <div class="bar-2"></div>
                </div>
              </div>
              <div class="side right">
                <div>6</div>
              </div>
              <div class="side">
                <div>1 star</div>
              </div>
              <div class="middle">
                <div class="bar-container">
                  <div class="bar-1"></div>
                </div>
              </div>
              <div class="side right">
                <div>20</div>
              </div>
            </div></div>
        </div>
      </div>
      <p></p>
      <p></p>
      <h3 className="heading">Reviews</h3>
      <div class="row"><br></br>
        <div class="col-2">
        <i class="fa fa-user-circle user" aria-hidden="true"></i>
        </div>
        <div class="col-10">
          <p>Yashika G.</p>
          <div className="ratingTime"><div>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star "></span> </div>
          <div style={{padding:"0px 0px 0px 20px" }}><p>2 weeks ago</p></div>

          </div>
          <p>This was a great course for fitness enthusiasts. It is well-structured and organized in a logical way.</p>

        </div>
      </div>
      <div class="row"><br></br>
        <div class="col-2">
        <i class="fa fa-user-circle user" aria-hidden="true"></i>
        </div>
        <div class="col-10">
          <p>Sandeep K.</p>
          <div className="ratingTime"><div>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star "></span> </div>
          <div style={{padding:"0px 0px 0px 20px" }}><p>4 weeks ago</p></div>

          </div>
          <p>It boosted my morale a lot and helped me in kickstarting my fitness journey.  </p>

        </div>
      </div>
      <div class="row"><br></br>
        <div class="col-2">
        <i class="fa fa-user-circle user" aria-hidden="true"></i>
        </div>
        <div class="col-10">
          <p>Piyush J.</p>
          <div className="ratingTime"><div>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star checked"></span>
          <span class="fa fa-star star "></span> </div>
          <div style={{padding:"0px 0px 0px 20px" }}><p>3 weeks ago</p></div>

          </div>
          <p>I am satisfied with the flow of this course and the amount of information and manuals it provides.</p>

        </div>
      </div>
      


    </div>
  );
}
export default ReviewSection;