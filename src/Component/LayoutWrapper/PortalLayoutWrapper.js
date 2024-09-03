import PortalHeader from "../Layout/portalHeaer";
import "./PortalLayoutWrapper.css";

const PortalLayoutWrapper = ({ children }) => {
  const centeredContentStyle = {
    // width: "1000px",
    // margin: "0 auto",
    // textAlign: "center",
  };
  const childContentStyle = {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100vh",
  };

  const fullScreen = {
    minHeight: "100vh",
    backgroundColor: "#1F386B",
    margin: "0",
    padding: "0",
  };

  return (
    <div className="full-screen">
      <div className="centered-content">
        <PortalHeader />
        <div className="child-content">{children}</div>
      </div>
    </div>
  );
};

export default PortalLayoutWrapper;
