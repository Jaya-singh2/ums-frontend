import Header from "../Layout/header";
import Footer from "../Layout/footer";

const LayoutWrapper = ({ children }) => {
  return (
    <div id="wrapper" className="clearfix">
      <Header />
      {children}
      <Footer />
      {/* <a className="scrollToTop" href="#">
        <i className="fa fa-angle-up" />
      </a> */}
    </div>
  );
};

export default LayoutWrapper;
