import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";
import "./TimeTable.css";
const TimeTable = () => {
  return (
    <PortalLayoutWrapper>
      <h5 className="text-center mb-4">Weekly Timetable</h5>
      <div>
        <p>
          <b>Registration Number</b> : 11702626
        </p>
        <p>
          <b>Section</b> : K17WDO
        </p>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr className="table-row-custom-font">
              <th className="table-head-background">Time</th>
              <th className="table-head-background">Monday</th>
              <th className="table-head-background">Tuesday</th>
              <th className="table-head-background">Wednesday</th>
              <th className="table-head-background">Thursday</th>
              <th className="table-head-background">Friday</th>
              <th className="table-head-background">Saturday</th>
              <th className="table-head-background">Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row-custom-font">
              <td>8:00 - 9:00</td>
              <td>Math</td>
              <td>Physics</td>
              <td>Chemistry</td>
              <td>Biology</td>
              <td>History</td>
              <td>Art</td>
              <td>Free</td>
            </tr>
            <tr className="table-row-custom-font">
              <td>9:00 - 10:00</td>
              <td>English</td>
              <td>Math</td>
              <td>Physics</td>
              <td>Chemistry</td>
              <td>Biology</td>
              <td>History</td>
              <td>Free</td>
            </tr>
            <tr className="table-row-custom-font">
              <td>10:00 - 11:00</td>
              <td>Chemistry</td>
              <td>Biology</td>
              <td>Math</td>
              <td>Physics</td>
              <td>English</td>
              <td>Free</td>
              <td>Free</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </PortalLayoutWrapper>
  );
};

export default TimeTable;
