import LayoutWrapper from "../../Component/LayoutWrapper/LayoutWrapper.js";
function Home() {
  return (
    <LayoutWrapper>
      {/* Section: home-boxes */}
      <section className="bg-silver-light">
        <div className="container pt-0 pb-0">
          <div className="section-content">
            <div
              className="row equal-height-inner home-boxes"
              data-margin-top="-100px"
            >
              <div className="col-sm-12 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay1">
                <div className="sm-height-auto bg-theme-colored">
                  <div className="text-center pt-30 pb-30">
                    <i className="fa fa-user text-white font-64" />
                    <h4 className="text-uppercase mt-20">
                      <a href="/#" className="text-white">
                        24 Hours Service
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay2">
                <div className="sm-height-auto bg-theme-colored-darker2">
                  <div className="text-center pt-30 pb-30">
                    <i className="fa fa-comments-o text-white font-64" />
                    <h4 className="text-uppercase mt-20">
                      <a href="/#" className="text-white">
                        Online Help
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay3">
                <div className="sm-height-auto bg-theme-colored-darker3">
                  <div className="text-center pt-30 pb-30">
                    <i className="fa fa-cc-paypal text-white font-64" />
                    <h4 className="text-uppercase mt-20">
                      <a href="/#" className="text-white">
                        Online Payment
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay4">
                <div className="sm-height-auto bg-theme-colored-darker4">
                  <div className="text-center pt-30 pb-30">
                    <i className="fa fa-mobile text-white font-64" />
                    <h4 className="text-uppercase mt-20">
                      <a href="/#" className="text-white">
                        Call +(012) 345 6789
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: About */}
      <section id="about">
        <div className="container pb-70">
          <div className="section-content">
            <div className="row">
              <div
                className="col-md-8 col-sm-12 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h2 className="text-uppercase mt-0">
                  Welcome To{" "}
                  <span className="text-theme-color-2"> LearnPress </span>
                </h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                  Quos dolo rem consequ untur, natus laudantium commodi earum
                  aliquid in ullam.
                </p>
                <div className="row mt-40">
                  <div className="col-md-6 wow fadeInUp" data-wow-duration="1s">
                    <div className="mb-sm-30">
                      <img
                        className="img-fullwidth"
                        src="Assests/images/about/7.jpg"
                        alt=""
                      />
                      <h4 className="letter-space-1 mt-10">
                        Graduation
                        <span className="text-theme-color-2"> Degree</span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur, magnam dolore tempore.
                      </p>
                      <a href="/#" className="btn btn-sm btn-theme-colored">
                        Read more
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-md-6 wow fadeInUp"
                    data-wow-duration="1.2s"
                  >
                    <div className="mb-sm-30">
                      <img
                        className="img-fullwidth"
                        src="Assests/images/about/8.jpg"
                        alt=""
                      />
                      <h4 className=" letter-space-1 mt-10">
                        Online
                        <span className="text-theme-color-2"> Learning</span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur, magnam dolore tempore.
                      </p>
                      <a href="/#" className="btn btn-sm btn-theme-colored">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-12 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="p-30 bg-theme-colored mt-10">
                  <h3 className="text-white mt-0 mb-10">
                    Get A Free Registration!
                  </h3>
                  {/* Appilication Form Start*/}
                  <form
                    id="reservation_form"
                    name="reservation_form"
                    className="reservation-form mt-20"
                    method="post"
                    action="#"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group mb-20">
                          <input
                            placeholder="Enter Name"
                            type="text"
                            id="reservation_name"
                            name="reservation_name"
                            required=""
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-20">
                          <input
                            placeholder="Email"
                            type="text"
                            id="reservation_email"
                            name="reservation_email"
                            className="form-control"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-20">
                          <input
                            placeholder="Phone"
                            type="text"
                            id="reservation_phone"
                            name="reservation_phone"
                            className="form-control"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-20">
                          <div className="styled-select">
                            <select
                              id="person_select"
                              name="person_select"
                              className="form-control"
                              required=""
                            >
                              <option value="">Courses</option>
                              <option value="1 Person">
                                Software Engineering
                              </option>
                              <option value="2 Person">Computer Traning</option>
                              <option value="3 Person">
                                Development Studies
                              </option>
                              <option value="Family Pack">
                                Chemical Engineering
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group mb-20">
                          <input
                            name="Date"
                            className="form-control required date-picker"
                            type="text"
                            placeholder="Date"
                            aria-required="true"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea
                            placeholder="Enter Message"
                            rows={3}
                            className="form-control required"
                            name="form_message"
                            id="form_message"
                            aria-required="true"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group mb-0 mt-10">
                          <input
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                            defaultValue=""
                          />
                          <button
                            type="submit"
                            className="btn btn-colored btn-default text-black btn-lg btn-block"
                            data-loading-text="Please wait..."
                          >
                            Submit Request
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* Application Form End*/}
                  {/* Application Form Validation Start*/}
                  {/* Application Form Validation Start */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Mission */}
      <section id="mission">
        <div className="container-fluid pt-0 pb-0">
          <div className="row equal-height">
            <div
              className="col-sm-6 col-md-6 xs-pull-none bg-theme-colored wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="pt-60 pb-40 pl-90 pr-160 p-md-30">
                <h2 className="title text-white text-uppercase line-bottom mt-0 mb-30">
                  Why Choose Us?
                </h2>
                <div className="icon-box clearfix m-0 p-0 pb-10">
                  <a
                    href="/#"
                    className="icon icon-circled bg-white icon-lg pull-left flip sm-pull-none"
                  >
                    <i className="fa fa-desktop text-theme-color-2 font-36" />
                  </a>
                  <div className="ml-120 ml-sm-0">
                    <h4 className="icon-box-title text-white mt-5 mb-10 letter-space-1">
                      Best Lab
                    </h4>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam interdum diam tortor, egestas varius erat aliquam.{" "}
                    </p>
                  </div>
                </div>
                <div className="icon-box clearfix m-0 p-0 pb-10">
                  <a
                    href="/#"
                    className="icon icon-circled bg-white icon-lg pull-left flip sm-pull-none"
                  >
                    <i className="fa fa-user text-theme-color-2 font-36" />
                  </a>
                  <div className="ml-120 ml-sm-0">
                    <h4 className="icon-box-title text-white mt-5 mb-10 letter-space-1">
                      Best Teachers
                    </h4>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam interdum diam tortor, egestas varius erat aliquam.{" "}
                    </p>
                  </div>
                </div>
                <div className="icon-box clearfix m-0 p-0 pb-10">
                  <a
                    href="/#"
                    className="icon icon-circled bg-white icon-lg pull-left flip sm-pull-none"
                  >
                    <i className="fa fa-money text-theme-color-2 font-36" />
                  </a>
                  <div className="ml-120 ml-sm-0">
                    <h4 className="icon-box-title text-white mt-5 mb-10 letter-space-1">
                      Low Cost Services
                    </h4>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam interdum diam tortor, egestas varius erat aliquam.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-6 p-0 bg-img-cover wow fadeInRight hidden-xs"
              data-bg-img="Assests/images/photos/ab1.jpg"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <img src="Assests/images/photos/ab1.jpg" alt="img" height="577x"></img>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}

export default Home;
