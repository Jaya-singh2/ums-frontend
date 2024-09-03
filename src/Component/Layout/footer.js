const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer bg-black-222"
      data-bg-img="images/footer-bg.png"
    >
      <div className="container pt-70 pb-40">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="widget dark">
              <img
                className="mt-10 mb-15"
                alt=""
                src="Assests/images/logo-wide-white.png"
              />
              <p className="font-16 mb-10">
                GreenPeace is a library of Crowdfunding and Charity templates
                with predefined elements which helps you to build your own site.
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <a className="font-14" href="#">
                <i className="fa fa-angle-double-right text-theme-colored" />{" "}
                Read more
              </a>
              <ul className="styled-icons icon-dark mt-20">
                <li
                  className="wow fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay=".1s"
                  data-wow-offset={10}
                >
                  <a href="/#" data-bg-color="#3B5998">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li
                  className="wow fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay=".2s"
                  data-wow-offset={10}
                >
                  <a href="/#" data-bg-color="#02B0E8">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li
                  className="wow fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay=".3s"
                  data-wow-offset={10}
                >
                  <a href="/#" data-bg-color="#05A7E3">
                    <i className="fa fa-skype" />
                  </a>
                </li>
                <li
                  className="wow fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay=".4s"
                  data-wow-offset={10}
                >
                  <a href="/#" data-bg-color="#A11312">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li
                  className="wow fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay=".5s"
                  data-wow-offset={10}
                >
                  <a href="/#" data-bg-color="#C22E2A">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="widget dark">
              <h5 className="widget-title line-bottom">Latest News</h5>
              <div className="latest-posts">
                <article className="post media-post clearfix pb-0 mb-10">
                  <a href="/#" className="post-thumb">
                    <img alt="" src="http://placehold.it/80x55" />
                  </a>
                  <div className="post-right">
                    <h5 className="post-title mt-0 mb-5">
                      <a href="#">Sustainable Construction</a>
                    </h5>
                    <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                  </div>
                </article>
                <article className="post media-post clearfix pb-0 mb-10">
                  <a href="/#" className="post-thumb">
                    <img alt="" src="http://placehold.it/80x55" />
                  </a>
                  <div className="post-right">
                    <h5 className="post-title mt-0 mb-5">
                      <a href="#">Industrial Coatings</a>
                    </h5>
                    <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                  </div>
                </article>
                <article className="post media-post clearfix pb-0 mb-10">
                  <a href="/#" className="post-thumb">
                    <img alt="" src="http://placehold.it/80x55" />
                  </a>
                  <div className="post-right">
                    <h5 className="post-title mt-0 mb-5">
                      <a href="#">Storefront Installations</a>
                    </h5>
                    <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                  </div>
                </article>
                <article className="post media-post clearfix pb-0 mb-10">
                  <a href="/#" className="post-thumb">
                    <img alt="" src="http://placehold.it/80x55" />
                  </a>
                  <div className="post-right">
                    <h5 className="post-title mt-0 mb-5">
                      <a href="#">Industrial Coatings</a>
                    </h5>
                    <p className="post-date mb-0 font-12">Mar 08, 2015</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="widget dark">
              <h5 className="widget-title line-bottom">Useful Links</h5>
              <ul className="list angle-double-right list-border">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Donor Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Disclaimer</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Media Center</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="widget dark">
              <h5 className="widget-title line-bottom">Quick Contact</h5>
              <ul className="list-border">
                <li>
                  <a href="#">+(012) 345 6789</a>
                </li>
                <li>
                  <a href="#">hello@yourdomain.com</a>
                </li>
                <li>
                  <a href="/#" className="lineheight-20">
                    121 King Street, Melbourne Victoria 3000, Australia
                  </a>
                </li>
              </ul>
              <p className="font-16 text-white mb-5 mt-15">
                Subscribe to our newsletter
              </p>
              <form
                id="footer-mailchimp-subscription-form"
                className="newsletter-form mt-10"
              >
                <label className="display-block" htmlFor="mce-EMAIL" />
                <div className="input-group">
                  <input
                    type="email"
                    defaultValue=""
                    name="EMAIL"
                    placeholder="Your Email"
                    className="form-control"
                    data-height="37px"
                    id="mce-EMAIL"
                  />
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      className="btn btn-colored btn-theme-colored m-0"
                    >
                      <i className="fa fa-paper-plane-o text-white" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-black-333">
        <div className="container pt-20 pb-20">
          <div className="row">
            <div className="col-md-6">
              <p className="font-11 text-black-777 m-0">
                <a target="_blank" href="https://www.templateshub.net">
                  Templates Hub
                </a>
              </p>
            </div>
            <div className="col-md-6 text-right">
              <div className="widget no-border m-0">
                <ul className="list-inline sm-text-center mt-5 font-12">
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="#">Help Desk</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
