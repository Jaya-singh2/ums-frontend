import React from "react";
import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";

const FacultyDashboard = () => {
  // Sample data (replace with real data fetching logic)
  const stats = {
    classesToday: 2,
    pendingAssignments: 3,
    leaveRequests: 1,
    upcomingEvents: 2,
  };

  return (
    <PortalLayoutWrapper>
      <section className="content-section">
        {/* Welcome Message & Profile Overview */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h2>Welcome, Dr. Jane Doe</h2>
            <p>Department of Computer Science</p>
          </div>
          <div>
            <img
              src="/path/to/profile-pic.jpg"
              alt="Profile"
              className="rounded-circle"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="row mb-4">
          <div className="col-md-3">
            <a href="/faculty/class-schedule" className="btn btn-info btn-block">
              Class Schedule
            </a>
          </div>
          <div className="col-md-3">
            <a href="/faculty/student-management" className="btn btn-info btn-block">
              Student Management
            </a>
          </div>
          <div className="col-md-3">
            <a href="/faculty/attendance" className="btn btn-info btn-block">
              Attendance
            </a>
          </div>
          <div className="col-md-3">
            <a href="/faculty/leave-requests" className="btn btn-info btn-block">
              Leave Requests
            </a>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="row col-md-12 mb-4">
          <div className="col-md-3">
            <div className="card text-white bg-primary" style={{width:'100%'}}>
              <div className="card-body">
                <h5 className="card-title">Classes Today</h5>
                <p className="card-text">{stats.classesToday}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-danger" style={{width:'100%'}}>
              <div className="card-body">
                <h5 className="card-title">Pending Assignments</h5>
                <p className="card-text">{stats.pendingAssignments}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-warning" style={{width:'100%'}}>
              <div className="card-body">
                <h5 className="card-title">Leave Requests</h5>
                <p className="card-text">{stats.leaveRequests}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-success" style={{width:'100%'}}>
              <div className="card-body">
                <h5 className="card-title">Upcoming Events</h5>
                <p className="card-text">{stats.upcomingEvents}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Classes */}
        {/* <div className="mb-4">
          <h4>Today's Classes</h4>
          <ul className="list-group">
            {todayClasses.map((classItem, index) => (
              <li key={index} className="list-group-item">
                <strong>{classItem.time}:</strong> {classItem.course} (Section {classItem.section})
              </li>
            ))}
          </ul>
        </div> */}

        {/* Notifications */}
        {/* <div className="mb-4">
          <h4>Notifications</h4>
          <ul className="list-group">
            {notifications.map((notification) => (
              <li key={notification.id} className="list-group-item">
                {notification.message}
              </li>
            ))}
          </ul>
        </div> */}

        {/* Recent Activities */}
        {/* <div className="mb-4">
          <h4>Recent Activities</h4>
          <ul className="list-group">
            <li className="list-group-item">Graded Assignment for Section A - Mathematics</li>
            <li className="list-group-item">Updated attendance for Section B - Physics</li>
          </ul>
        </div> */}

        {/* Resources */}
        {/* <div className="mb-4">
          <h4>Resources</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="/faculty/resources/syllabus">Syllabus Templates</a>
            </li>
            <li className="list-group-item">
              <a href="/faculty/resources/policies">Faculty Policies</a>
            </li>
          </ul>
        </div> */}
      </section>
    </PortalLayoutWrapper>
  );
};

export default FacultyDashboard;
