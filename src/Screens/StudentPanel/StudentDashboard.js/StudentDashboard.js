import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";

const StudentDashboard = () => {
  return (
    <PortalLayoutWrapper>
      <section className="content-section">
        <div className="card col-6">
          <h3>Fees</h3>
          <p>Total Fees: $2000. Paid: $1500. Due: $500</p>
        </div>
        <div className="card col-16">
          <h3>Fees</h3>
          <p>Total Fees: $2000. Paid: $1500. Due: $500</p>
        </div>
        {/* Add more cards as needed */}
      </section>
    </PortalLayoutWrapper>
  );
};

export default StudentDashboard;
