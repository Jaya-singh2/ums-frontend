import PortalHeader from "../Layout/portalHeaer";
import "./PortalLayoutWrapper.css";

const PortalLayoutWrapper = ({ children }) => {
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
