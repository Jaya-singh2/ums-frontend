import { useLocation, Link } from "react-router-dom";

function Header() {
  let location = useLocation();
  return (
    <header id="header" className="header">
      <div className="header-top bg-theme-color-2 sm-text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="widget no-border m-0">
                <ul className="list-inline">
                  <li className="m-0 pl-10 pr-10">
                    {" "}
                    <i className="fa fa-phone text-white" />{" "}
                    <a className="text-white" href="#">
                      123-456-789
                    </a>{" "}
                  </li>
                  <li className="text-white m-0 pl-10 pr-10">
                    {" "}
                    <i className="fa fa-clock-o text-white" /> Mon-Fri 8:00 to
                    2:00
                  </li>
                  <li className="m-0 pl-10 pr-10">
                    {" "}
                    <i className="fa fa-envelope-o text-white" />{" "}
                    <a className="text-white" href="#">
                      contact@yourdomain.com
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget no-border m-0">
                <ul className="list-inline text-right sm-text-center">
                  <li>
                    <a href="#" className="text-white">
                      FAQ
                    </a>
                  </li>
                  <li className="text-white">|</li>
                  <li>
                    <a href="#" className="text-white">
                      Help Desk
                    </a>
                  </li>
                  <li className="text-white">|</li>
                  <li>
                    <a href="#" className="text-white">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav">
        <div className="header-nav-wrapper navbar-scrolltofixed bg-white">
          <div className="container">
            <nav id="menuzord-right" className="menuzord default">
              <a
                className="menuzord-brand pull-left flip"
                href="javascript:void(0)"
              >
                <img src="Assests/images/logo-wide.png" alt="" />
              </a>
              <ul className="menuzord-menu">
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={
                    location.pathname === "/courses" ||
                    location.pathname === "/course-details"
                      ? "active"
                      : ""
                  }
                >
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
