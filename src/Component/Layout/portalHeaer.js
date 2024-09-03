import { Link, useLocation } from "react-router-dom";

const PortalHeader = () => {
  const navbarStyle = {
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
    marginBottom: "0px",
  };
  let location = useLocation();

  const role = localStorage.getItem("role");

  const studentNavItems = [
    {
      label: "Dashboard",
      path: "/student-dashboard",
      dropdown: false,
    },
    {
      label: "Academics",
      dropdown: true,
      items: [
        { label: "View Time Table", path: "/time-table" },
        { label: "Course Syllabus", path: "/course-syllabus" },
        { label: "Assignment Upload/Download", path: "/assignment" },
        { label: "View Attendance", path: "/view-attendance" },
      ],
    },
    {
      label: "Examination",
      dropdown: true,
      items: [
        { label: "Exam Seating Plan", path: "/exam-seating-plan" },
        { label: "Result", path: "/exam-result" },
      ],
    },
    {
      label: "Fee Statement",
      path: "/fee-statement",
      dropdown: false,
    },
  ];

  const facultyNavItems = [
    {
      label: "Dashboard",
      path: "/faculty-dashboard",
      dropdown: false,
    },
    {
      label: "Academic",
      dropdown: true,
      items: [
        { label: "Class Schedule", path: "/faculty/class-schedule" },
        { label: "Assignments", dropdown:true, path: "/faculty/assignments" },
        { label: "Subjects", path: "/faculty/subjects" },
        { label: "Assigned Subjects", path: "/faculty/assigned-subjects" },
      ],
    },
    {
      label: "Student Management",
      dropdown: true,
      items: [
        { label: "Students", path: "/faculty/students" },
        { label: "Enter Marks", path: "/faculty/enter-marks" },
        { label: "Marksheet Report", path: "/faculty/marksheet-report" },
        { label: "Mark Attendance", path: "/faculty/mark-attendance" },
        { label: "Attendance Report", path: "/faculty/attendance-report" },
      ],
    },
    {
      label: "Administration",
      dropdown: true,
      items: [{ label: "Leave Management", path: "/leave-management" }],
    },
  ];

  const adminNavItems = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      dropdown: false,
    },
    {
      label: "Users",
      dropdown: true,
      items: [
        { label: "Student", path: "/admin/students" },
        { label: "faculty", path: "/admin/faculty" },
        { label: "search users", path: "/admin/search-users" },
        { label: "Users", path: "/admin/users" },
      ],
    },
    {
      label: "Academic",
      dropdown: true,
      items: [
        { label: "Courses", path: "/admin/courses" },
        { label: "Subjects", path: "/admin/subjects" },
        { label: "Assign Subject", path: "/admin/assign-subject" }
      ],
    },
    {
      label: "Examination",
      dropdown: true,
      items: [
        { label: "Enter Marks", path: "/admin/enter-marks" },
        { label: "Marksheet Report", path: "/admin/marksheet-report" }
      ],
    },
    {
      label: "Attendance",
      dropdown: true,
      items: [
        { label: "Mark Attendance", path: "/admin/mark-attendance" },
        { label: "Attendance Report", path: "/admin/attendance-report" }
      ],
    },
  ];

  const navItems = () => {
    switch (role) {
      case "student":
        return studentNavItems;
      case "faculty":
        return facultyNavItems;
      case "admin":
        return adminNavItems;
      default:
        return [];
    }
  };

  return (
    <nav className="navbar navbar-default" style={navbarStyle}>
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="/#">
            <img
              src="/Assests/images/logo-wide.png"
              id="icon"
              alt="User Icon"
            />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          <ul className="nav navbar-nav">
            {navItems().map((item, index) =>
              item.dropdown ? (
                <li
                  key={index}
                  className={
                    item.items.some(
                      (subItem) => location.pathname === subItem.path
                    )
                      ? "active dropdown"
                      : "dropdown"
                  }
                >
                  <a
                    href="/#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.label} <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link to={subItem.path}>{subItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  key={index}
                  className={
                    location.pathname === item.path ? "active" : ""
                  }
                >
                  <Link to={item.path}>
                    {item.label} <span className="sr-only">(current)</span>
                  </Link>
                </li>
              )
            )}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/signin">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PortalHeader;
