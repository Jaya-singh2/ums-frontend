import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./Screens/Home";
import Courses from "./Screens/Courses";
import CourseDetails from "./Screens/CourseDetails";
import SignIn from "./Screens/SignIn/SignIn.js";
// ---------------STUDENT PANEL------------------------
import StudentDashboard from "./Screens/StudentPanel/StudentDashboard.js";
import TimeTable from "./Screens/StudentPanel/TimeTable";
import ExamSeatingPlan from "./Screens/StudentPanel/ExamSeatingPlan";
import ExamResult from "./Screens/StudentPanel/ExamResult";
import StudentAttendance from "./Screens/StudentPanel/StudentAttendance";
import StudentAssignmentUploadDownload from "./Screens/StudentPanel/StudentAssignmentUploadDownload";
import StudentCourseSyllabus from "./Screens/StudentPanel/StudentCourseSyllabus";
import FeeStatementPage from "./Screens/StudentPanel/FeeStatements";
// ---------------FACULTY PANEL------------------------
import FacultyDashboard from "./Screens/FacultyPortal/FacultyDashboard";
import StudentAttendanceMark from "./Screens/FacultyPortal/StudentAttendance";
import Assignment from "./Screens/FacultyPortal/Assignment";
import FacultyLeave from "./Screens/FacultyPortal/FacultyLeave";
import FacultyClassSchedule from "./Screens/FacultyPortal/FacultyClassSchedule";
import FacultyAssignSubject from "./Screens/FacultyPortal/Academic/AssignSubject";
import FacultySubjects from "./Screens/FacultyPortal/Academic/Subjects";
import FacultyEnterMarks from "./Screens/FacultyPortal/StudentManagement/EnterMarks";
import FacultyMarksheetReport from "./Screens/FacultyPortal/StudentManagement/MarksheetReport";
import FacultyMarkAttendance from "./Screens/FacultyPortal/StudentManagement/MarkAttendance";
import FacultyAttendanceReport from "./Screens/FacultyPortal/StudentManagement/AttendanceReport";
import FacultyStudents from "./Screens/FacultyPortal/StudentManagement/AllStudents"
import PDFViewer from "./Screens/FacultyPortal/PdfViewer";
import Scanner from "./Screens/FacultyPortal/Scanning";
// ---------------ADMIN PANEL------------------------
import AdminDashboard from "./Screens/AdminPanel/AdminDashboard";
import AdminCourses from "./Screens/AdminPanel/AcademicManagement/Courses"
import AdminSubjects from "./Screens/AdminPanel/AcademicManagement/Subjects"
import AdminAssignSubjects from "./Screens/AdminPanel/AcademicManagement/AssignSubject"
import AdminStudents from "./Screens/AdminPanel/Users/Students";
import AdminFaculty from "./Screens/AdminPanel/Users/Faculity";
import AdminSearchUsers from "./Screens/AdminPanel/Users/SearchUsers";
import AdminAllUsers from "./Screens/AdminPanel/Users/AllUsers";
import AdminEnterMarks from "./Screens/AdminPanel/Examination/EnterMarks";
import AdminMarksheetReport from "./Screens/AdminPanel/Examination/MarksheetReport";
import AdminMarkAttendance from "./Screens/AdminPanel/AttendanceMangement/MarkAttendance";
import AdminAttendanceReport from "./Screens/AdminPanel/AttendanceMangement/AttendanceReport";

const App = () => {
  return (
    <Router basename="/ums-frontend">
      <RedirectHandler />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-details" element={<CourseDetails />} />
        {/* ---------------STUDENT PANEL ROUTE------------------------ */}
        <Route exact path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/time-table" element={<TimeTable />} />
        <Route path="/exam-seating-plan" element={<ExamSeatingPlan />} />
        <Route path="/exam-result" element={<ExamResult />} />
        <Route path="/view-attendance" element={<StudentAttendance />} />
        <Route
          path="/assignment"
          element={<StudentAssignmentUploadDownload />}
        />
        <Route path="/course-syllabus" element={<StudentCourseSyllabus />} />
        <Route path="/fee-statement" element={<FeeStatementPage />} />
             {/* ---------------FACULTY PANEL ROUTE------------------------ */}
        <Route exact path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route  path="/attendance" element={<StudentAttendanceMark />} />
        <Route  path="/faculty/assignments" element={<Assignment />} />
        <Route  path="/leave-management" element={<FacultyLeave />} />
        <Route  path="/faculty/class-schedule" element={<FacultyClassSchedule/>} />
        <Route  path="/faculty/assigned-subjects" element={<FacultyAssignSubject/>} />
        <Route  path="/faculty/subjects" element={<FacultySubjects/>} />
        <Route  path="/faculty/students" element={<FacultyStudents/>} />
        <Route  path="/faculty/enter-marks" element={<FacultyEnterMarks/>} />
        <Route  path="/faculty/marksheet-report" element={<FacultyMarksheetReport/>} />
        <Route  path="/faculty/mark-attendance" element={<FacultyMarkAttendance/>} />
        <Route  path="/faculty/attendance-report" element={<FacultyAttendanceReport/>} />
        <Route  path="/faculty/view-sheet-pdfs" element={<PDFViewer/>} />
        <Route  path="/faculty/scan-A4-to-pdfs" element={<Scanner/>} />
          {/* ---------------ADMIN PANEL ROUTE------------------------ */}
        <Route  path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route  path="/admin/courses" element={<AdminCourses/>} />
        <Route  path="/admin/subjects" element={<AdminSubjects/>} />
        <Route  path="/admin/students" element={<AdminStudents/>} />
        <Route  path="/admin/faculty" element={<AdminFaculty/>} />
        <Route  path="/admin/search-users" element={<AdminSearchUsers/>} />
        <Route  path="/admin/users" element={<AdminAllUsers/>} />
        <Route  path="/admin/assign-subject" element={<AdminAssignSubjects/>} />
        <Route  path="/admin/enter-marks" element={<AdminEnterMarks/>} />
        <Route  path="/admin/marksheet-report" element={<AdminMarksheetReport/>} />
        <Route  path="/admin/mark-attendance" element={<AdminMarkAttendance/>} />
        <Route  path="/admin/attendance-report" element={<AdminAttendanceReport/>} />
      </Routes>
    </Router>
  );
};

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const redirect = searchParams.get('redirect');

    if (redirect) {
      navigate(redirect);
    }
  }, [navigate]);

  return null;
};

export default App;
