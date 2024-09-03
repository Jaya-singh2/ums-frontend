import { useState } from "react";
import { Link } from "react-router-dom";
import LayoutWrapper from "../../Component/LayoutWrapper/LayoutWrapper.js";
import EnrollModal from "./EnrollModal";

const Courses = () => {
  const [disciplineList, setDisciplineList] = useState([
    "Engineering",
    "Management",
    "Computer Science and Engineering (CSE)",
    "Commerse",
    "Cyber Security",
  ]);
  const [courses, setCourses] = useState([
    {
      name: "B.Tech. (CSE - Generative Artificial Intelligence)",
      description:
        "This course focuses on the principles and applications of generative AI, preparing students for careers in AI development and research.",
      duration: "4 years (8 semesters)",
    },
    {
      name: "B.Tech. (Hons.) (Computer Science and Engg. - Data Science & Data Engineering)",
      description:
        "This honors program offers in-depth knowledge in data science and data engineering, equipping students with the skills needed for data-driven industries.",
      duration: "4 years (8 semesters)",
    },
    {
      name: "B.Tech. (Electronics and Communication Engineering (ECE))",
      description:
        "This course covers the fundamentals of electronics and communication, training students for roles in telecommunications, embedded systems, and more.",
      duration: "4 years (8 semesters)",
    },
    {
      name: "B.Tech. (Mechanical Engineering)",
      description:
        "This program provides a comprehensive understanding of mechanical engineering principles, preparing students for careers in manufacturing, robotics, and automotive industries.",
      duration: "4 years (8 semesters)",
    },
    {
      name: "B.Tech. (Civil Engineering)",
      description:
        "This course focuses on the design, construction, and maintenance of infrastructure, preparing students for roles in construction management and urban planning.",
      duration: "4 years (8 semesters)",
    },
    {
      name: "B.Tech. (Information Technology)",
      description:
        "This program covers the essentials of IT, including software development, network security, and systems administration, equipping students for various IT roles.",
      duration: "4 years (8 semesters)",
    },
    {
      name: "B.Tech. (Chemical Engineering)",
      description:
        "This course offers an in-depth study of chemical processes and engineering principles, preparing students for careers in pharmaceuticals, energy, and materials science.",
      duration: "4 years (8 semesters)",
    },
  ]);

  return (
    <LayoutWrapper>
      <hr class="custom-hr" />
      <div className="main-content" style={{ marginTop: "-35px" }}>
        {/* Section: inner-header */}

        {/* Section: Course list */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8 blog-pull-right">
                {courses?.map((data, index) => (
                  <div key={index}>
                    <div className="row mb-15">
                      <div className="col-sm-6 col-md-4">
                        <div className="thumb">
                          {" "}
                          <img
                            alt="featured project"
                            src="Assests/images/project/lg1.jpg"
                            className="img-fullwidth"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-8">
                        <h4 className="line-bottom mt-0 mt-sm-20">
                          {data?.name}
                        </h4>
                        <ul className="review_text list-inline">
                          <li>
                            <h4 className="mt-0">
                              <span className="text-theme-color-2">
                                Duration :
                              </span>{" "}
                              {data?.duration}
                            </h4>
                          </li>
                        </ul>
                        <p>{data?.description}</p>
                        <Link
                          className="btn btn-dark btn-theme-colored btn-sm text-uppercase mt-10"
                          to="/course-details"
                        >
                          View Details
                        </Link>{" "}
                        <button
                          className="btn btn-dark btn-theme-colored btn-sm text-uppercase mt-10"
                          data-toggle="modal"
                          data-target="#enrollModal"
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}{" "}
              </div>
              <div className="col-md-4">
                <div className="sidebar sidebar-left mt-sm-30">
                  <div className="widget">
                    <h5 className="widget-title line-bottom">
                      Search <span className="text-theme-color-2">Courses</span>
                    </h5>
                    <div className="search-form">
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            placeholder="Search by keyword, ex. MBA, CSE etc."
                            className="form-control search-input"
                          />
                          <span className="input-group-btn">
                            <button type="submit" className="btn search-button">
                              <i className="fa fa-search" />
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="widget">
                    <h5 className="widget-title line-bottom">
                      What's your last
                      <span className="text-theme-color-2"> qualification</span>
                      ?
                    </h5>
                    <div className="categories">
                      <ul className="list list-border angle-double-right">
                        <li>
                          <div class="form-group form-check">
                            <input
                              type="radio"
                              id="search-radio"
                              name="search"
                              class="form-check-input"
                            />{" "}
                            <label class="form-check-label" for="search-radio">
                              10th
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-group form-check">
                            <input
                              type="radio"
                              id="search-radio"
                              name="search"
                              class="form-check-input"
                            />{" "}
                            <label class="form-check-label" for="search-radio">
                              12th
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-group form-check">
                            <input
                              type="radio"
                              id="search-radio"
                              name="search"
                              class="form-check-input"
                            />{" "}
                            <label class="form-check-label" for="search-radio">
                              Diplomaor certificate
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-group form-check">
                            <input
                              type="radio"
                              id="search-radio"
                              name="search"
                              class="form-check-input"
                            />{" "}
                            <label class="form-check-label" for="search-radio">
                              Graduation
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-group form-check">
                            <input
                              type="radio"
                              id="search-radio"
                              name="search"
                              class="form-check-input"
                            />{" "}
                            <label class="form-check-label" for="search-radio">
                              Post Graduation
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget">
                    <h5 className="widget-title line-bottom">
                      Which{" "}
                      <span className="text-theme-color-2">discipline </span>
                      are you interested in ?
                    </h5>
                    <div className="search-form">
                      <form>
                        <select className="form-control">
                          {disciplineList?.map((data, index) => (
                            <option key={index} value={data}>
                              {data}
                            </option>
                          ))}
                        </select>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <nav>
                  <ul className="pagination xs-pull-center m-0">
                    <li>
                      {" "}
                      <a href="#" aria-label="Previous">
                        {" "}
                        <span aria-hidden="true">«</span>{" "}
                      </a>{" "}
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" aria-label="Next">
                        {" "}
                        <span aria-hidden="true">»</span>{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
      <EnrollModal />
      {/* end main-content */}
    </LayoutWrapper>
  );
};

export default Courses;
