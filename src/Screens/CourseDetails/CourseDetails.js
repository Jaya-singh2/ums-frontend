import LayoutWrapper from "../../Component/LayoutWrapper/LayoutWrapper.js";
import "./CourseDetails.css";

const subjects = {
  autumn: [
    "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY",
    "ENGINEERING MATHEMATICS",
    "ENGINEERING PHYSICS",
    "INTERNET PROGRAMMING LABORATORY",
    "ORIENTATION TO COMPUTING-I",
    "PYTHON PROGRAMMING",
    "SOFT SKILLS-I",
    "SOFT SKILLS-II",
  ],
  spring: [
    "COMPUTER PROGRAMMING",
    "DATABASE MANAGEMENT SYSTEMS",
    "DISCRETE MATHEMATICS",
    "ENGINEERING GRAPHICS AND DIGITAL FABRICATION",
    "ENVIRONMENTAL STUDIES",
    "LANGUAGE ELECTIVE 1",
    "ORIENTATION TO COMPUTING-II",
    "SOFTWARE ENGINEERING",
  ],
};

const feeDetails = {
  autumn: {
    tuitionFee: 55000,
    examFee: 2000,
    labFee: 10000,
    otherCharges: 5000,
    totalFee: 72000,
  },
  spring: {
    tuitionFee: 55000,
    examFee: 2000,
    labFee: 10000,
    otherCharges: 5000,
    totalFee: 72000,
  },
};

const CourseDetails = () => {
  return (
    <LayoutWrapper>
      <>
        S{/* Start main-content */}
        <div className="main-content bg-lighter">
          {/* Section: inner-header */}
          {/* Section: Blog */}
          <section>
            <div className="container mb-0 pt-5 pb-30">
              <div className="row">
                <div className="col blog-pull-right">
                  <div className="single-service">
                    <h2 className="text-theme-colored text-center mb-10">
                      B.Tech. (Hons.) (Computer Science and Engg. - Data Science
                      & Data Engineering)
                    </h2>
                    <h5 className="text-center">
                      Duration : 4 yrs. (8 Semesters)
                    </h5>
                    <h5>
                      <em>
                        This programme aims towards creating skilful graduates
                        with specialization in Data Science and Data Engineering
                        domain which emphasizes comprehensive knowledge through
                        courses like data engineering, data visualization, data
                        modeling, big data analytics and predictive analytics.
                        The programme encompasses Data Science as an
                        interdisciplinary, problem-solving oriented domain
                      </em>
                    </h5>

                    <h3 className="text-theme-colored text-center">
                      Curriculum Details
                    </h3>

                    <ul class="nav  nav-pills" id="myPills" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#1st"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          1st Year
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#2nd"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          2nd Year
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="contact-tab"
                          data-toggle="tab"
                          href="#3rd"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          3rd Year
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="contact-tab"
                          data-toggle="tab"
                          href="#4th"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          4th Year
                        </a>
                      </li>
                    </ul>

                    <div class="tab-content">
                      <div
                        class="tab-pane fade active in"
                        id="1st"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <h5>
                              Autumn Term is the first/odd semester of an
                              academic session/year.
                            </h5>
                            <div className="card ">
                              <div className="card-header">Autumn Term</div>
                              <ul className="list-group list-group-flush">
                                {subjects.autumn.map((subject, index) => (
                                  <li key={index} className="list-group-item">
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h5>
                              Spring Term is the second/even semester of an
                              academic session/year.
                            </h5>
                            <div className="card ">
                              <div className="card-header">Spring Term</div>
                              <ul className="list-group list-group-flush">
                                {subjects.spring.map((subject, index) => (
                                  <li key={index} className="list-group-item">
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="2nd"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <h5>
                              Autumn Term is the first/odd semester of an
                              academic session/year.
                            </h5>
                            <div className="card ">
                              <div className="card-header">Autumn Term</div>
                              <ul className="list-group list-group-flush">
                                {subjects.autumn.map((subject, index) => (
                                  <li key={index} className="list-group-item">
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h5>
                              Spring Term is the second/even semester of an
                              academic session/year.
                            </h5>
                            <div className="card ">
                              <div className="card-header">Spring Term</div>
                              <ul className="list-group list-group-flush">
                                {subjects.spring.map((subject, index) => (
                                  <li key={index} className="list-group-item">
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="4th"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <h5>
                              Autumn Term is the first/odd semester of an
                              academic session/year.
                            </h5>
                            <div className="card ">
                              <div className="card-header">Autumn Term</div>
                              <ul className="list-group list-group-flush">
                                {subjects.autumn.map((subject, index) => (
                                  <li key={index} className="list-group-item">
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h5>
                              Spring Term is the second/even semester of an
                              academic session/year.
                            </h5>
                            <div className="card ">
                              <div className="card-header">Spring Term</div>
                              <ul className="list-group list-group-flush">
                                {subjects.spring.map((subject, index) => (
                                  <li key={index} className="list-group-item">
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="3rd"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <h5>
                              Autumn Term is the first/odd semester of an
                              academic session/year.
                            </h5>
                            <div className="card ">
                              <div className="card-header">Autumn Term</div>
                              <ul className="list-group list-group-flush">
                                {subjects.autumn.map((subject, index) => (
                                  <li key={index} className="list-group-item">
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h5>
                              Spring Term is the second/even semester of an
                              academic session/year.
                            </h5>
                            <div className="card ">
                              <div className="card-header">Spring Term</div>
                              <ul className="list-group list-group-flush">
                                {subjects.spring.map((subject, index) => (
                                  <li key={index} className="list-group-item">
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h3 className="text-theme-colored">
                          FEE Details (Semester wise)
                        </h3>
                        <div className="row">
                          <div className="col">
                            <div className="card">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Fee Type</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {Object.entries(feeDetails.autumn).map(
                                    ([key, value]) => (
                                      <tr key={key}>
                                        <td>
                                          {key
                                            .replace(/([A-Z])/g, " $1")
                                            .toUpperCase()}
                                        </td>
                                        <td>₹{value}</td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-sm-12 col-md-4">
                  <div className="sidebar sidebar-left mt-sm-30 ml-40">
                    <div className="widget">
                      <h4 className="widget-title line-bottom">Courses List</h4>
                      <div className="services-list">
                        <ul className="list list-border angle-double-right">
                          <li className="active">
                            <a href="page-courses-accounting-technologies.html">
                              Accounting Technologies
                            </a>
                          </li>
                          <li>
                            <a href="page-courses-chemical-engineering.html">
                              Chemical Engineering
                            </a>
                          </li>
                          <li>
                            <a href="page-courses-computer-technologies.html">
                              Computer Technologies
                            </a>
                          </li>
                          <li>
                            <a href="page-courses-development-studies.html">
                              Development Studies
                            </a>
                          </li>
                          <li>
                            <a href="page-courses-electrical-electronic.html">
                              Electrical &amp; Electronic
                            </a>
                          </li>
                          <li>
                            <a href="page-courses-modern-languages.html">
                              Modern Languages
                            </a>
                          </li>
                          <li>
                            <a href="page-courses-modern-technologies.html">
                              Modern Technologies
                            </a>
                          </li>
                          <li>
                            <a href="page-courses-software-engineering.html">
                              Software Engineering
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget">
                      <h4 className="widget-title line-bottom">
                        Opening Hours
                      </h4>
                      <div className="opening-hours">
                        <ul className="list-border">
                          <li className="clearfix">
                            {" "}
                            <span> Mon - Tues :</span>
                            <div className="value pull-right">
                              {" "}
                              6.00 am - 10.00 pm{" "}
                            </div>
                          </li>
                          <li className="clearfix">
                            {" "}
                            <span> Wednes - Thurs :</span>
                            <div className="value pull-right">
                              {" "}
                              8.00 am - 6.00 pm{" "}
                            </div>
                          </li>
                          <li className="clearfix">
                            {" "}
                            <span> Fri : </span>
                            <div className="value pull-right">
                              {" "}
                              3.00 pm - 8.00 pm{" "}
                            </div>
                          </li>
                          <li className="clearfix">
                            {" "}
                            <span> Sun : </span>
                            <div className="value pull-right"> Colosed </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget">
                      <h4 className="widget-title line-bottom">Latest News</h4>
                      <div className="latest-posts">
                        <article className="post media-post clearfix pb-0 mb-10">
                          <a className="post-thumb" href="#">
                            <img src="https://placehold.it/75x75" alt="" />
                          </a>
                          <div className="post-right">
                            <h5 className="post-title mt-0">
                              <a href="#">Sustainable Construction</a>
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet adipisicing elit...
                            </p>
                          </div>
                        </article>
                        <article className="post media-post clearfix pb-0 mb-10">
                          <a className="post-thumb" href="#">
                            <img src="https://placehold.it/75x75" alt="" />
                          </a>
                          <div className="post-right">
                            <h5 className="post-title mt-0">
                              <a href="#">Industrial Coatings</a>
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet adipisicing elit...
                            </p>
                          </div>
                        </article>
                        <article className="post media-post clearfix pb-0 mb-10">
                          <a className="post-thumb" href="#">
                            <img src="https://placehold.it/75x75" alt="" />
                          </a>
                          <div className="post-right">
                            <h5 className="post-title mt-0">
                              <a href="#">Storefront Installations</a>
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet adipisicing elit...
                            </p>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="widget">
                      <div
                        className="mt-30 p-30"
                        style={{ border: "10px solid #f1f1f1" }}
                      >
                        <h5 className="text-theme-colored title-border mb-20">
                          student's Feedback
                        </h5>
                        <div className="testimonial-carousel-info owl-nav-top">
                          <div className="item">
                            <div className="comment">
                              <p>
                                Lorem ipsum dolor sit ametconse ctetur
                                adipisicing elitvolup tatem error sit qui
                                dolorem facilis.
                              </p>
                            </div>
                            <div className="content mt-20">
                              <div className="thumb pull-right">
                                <img
                                  className="img-circle"
                                  alt=""
                                  src="Assests/images/testimonials/s1.jpg"
                                />
                              </div>
                              <div className="patient-details text-right pull-right mr-20 mt-10">
                                <h5 className="author">Jonathan Smith</h5>
                                <h6 className="title">cici inc.</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="comment">
                              <p>
                                Lorem ipsum dolor sit ametconse ctetur
                                adipisicing elitvolup tatem error sit qui
                                dolorem facilis.
                              </p>
                            </div>
                            <div className="content mt-20">
                              <div className="thumb pull-right">
                                <img
                                  className="img-circle"
                                  alt=""
                                  src="Assests/images/testimonials/s2.jpg"
                                />
                              </div>
                              <div className="patient-details text-right pull-right mr-20 mt-10">
                                <h5 className="author">Jonathan Smith</h5>
                                <h6 className="title">cici inc.</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="comment">
                              <p>
                                Lorem ipsum dolor sit ametconse ctetur
                                adipisicing elitvolup tatem error sit qui
                                dolorem facilis.
                              </p>
                            </div>
                            <div className="content mt-20">
                              <div className="thumb pull-right">
                                <img
                                  className="img-circle"
                                  alt=""
                                  src="Assests/images/testimonials/s3.jpg"
                                />
                              </div>
                              <div className="patient-details text-right pull-right mr-20 mt-10">
                                <h5 className="author">Jonathan Smith</h5>
                                <h6 className="title">cici inc.</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="widget">
                      <h4 className="widget-title line-bottom">
                        Photos from Flickr
                      </h4>
                      <div id="flickr-feed" className="clearfix">
                        Flickr Link 
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </div>
        {/* end main-content */}
      </>
    </LayoutWrapper>
  );
};

export default CourseDetails;
