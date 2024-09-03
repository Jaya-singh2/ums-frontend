import { useState } from "react";
import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";
import "./ExamResult.css";
const ExamResult = () => {
  const terms = [
    { id: "1", name: "Term 1" },
    { id: "2", name: "Term 2" },
    // Add more terms as needed
  ];

  const [selectedTerm] = useState(terms[0].id);
  const [activeTab, setActiveTab] = useState("marks");


  const grades = [
    {
      course: "CSE111 :: ORIENTATION TO COMPUTING-I",
      credit: 2.0,
      grade: "B",
      termId: 123,
    },
    {
      course: "CSE326 :: INTERNET PROGRAMMING LABORATORY",
      credit: 2.0,
      grade: "B+",
      termId: 123,
    },
    {
      course: "INT108 :: PYTHON PROGRAMMING",
      credit: 4.0,
      grade: "B+",
      termId: 123,
    },
    {
      course: "MEC136 :: ENGINEERING GRAPHICS AND DIGITAL FABRICATION",
      credit: 4.0,
      grade: "B",
      termId: 123,
    },
    {
      course: "MTH174 :: ENGINEERING MATHEMATICS",
      credit: 4.0,
      grade: "D",
      termId: 123,
    },
    {
      course: "PES318 :: SOFT SKILLS-I",
      credit: 3.0,
      grade: "B+",
      termId: 1234,
    },
    {
      course: "PHY110 :: ENGINEERING PHYSICS",
      credit: 3.0,
      grade: "B",
      termId: 1234,
    },
    {
      course: "CHE110 :: ENVIRONMENTAL STUDIES",
      credit: 2.0,
      grade: "B+",
      termId: 1234,
    },
    {
      course: "CSE101 :: COMPUTER PROGRAMMING",
      credit: 4.0,
      grade: "A",
      termId: 1234,
    },
    {
      course: "CSE121 :: ORIENTATION TO COMPUTING-II",
      credit: 2.0,
      grade: "A+",
      termId: 1234,
    },
    {
      course: "CSE320 :: SOFTWARE ENGINEERING",
      credit: 3.0,
      grade: "C",
      termId: 1234,
    },
    {
      course: "ECE249 :: BASIC ELECTRICAL AND ELECTRONICS ENGINEERING",
      credit: 4.0,
      grade: "C",
      termId: 1234,
    },
    {
      course:
        "ECE279 :: BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY",
      credit: 1.0,
      grade: "B+",
      termId: 1234,
    },
  ];

  return (
    <PortalLayoutWrapper>
      <h5 className="my-4">Student Result Details</h5>
      <div className="table-responsive mb-10">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="table-head-background">Student Name</th>
              <th className="table-head-background">Registration No</th>
              <th className="table-head-background">Batch Year</th>
              <th className="table-head-background">Program</th>
              <th className="table-head-background">CGPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jaya Singh</td>
              <td>11702626</td>
              <td>2024</td>
              <td>Btech (CSE)</td>
              <td>9.5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="nav nav-tabs" role="tablist">
        <li
          role="presentation"
          className={activeTab === "marks" ? "active" : ""}
        >
          <a
            href="#marks"
            aria-controls="marks"
            role="tab"
            data-toggle="tab"
            onClick={() => setActiveTab("marks")}
          >
            <b> Marks</b>
          </a>
        </li>
        <li
          role="presentation"
          className={activeTab === "grades" ? "active" : ""}
        >
          <a
            href="#grades"
            aria-controls="grades"
            role="tab"
            data-toggle="tab"
            onClick={() => setActiveTab("grades")}
          >
            <b> Grades</b>
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          role="tabpanel"
          className={`tab-pane fade ${
            activeTab === "marks" ? "in active" : ""
          }`}
          id="marks"
        >
          <div className="form-group d-flex">
            <label htmlFor="termSelect" style={{ marginRight: "10px" }}>
              Select Term:
            </label>
            <select
              id="termSelect"
              className="form-control"
              value={selectedTerm}
              style={{ display: "inline-block", width: "auto" }}
            >
              {terms.map((term) => (
                <option key={term.id} value={term.id}>
                  {term.name}
                </option>
              ))}
            </select>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="table-head-background">Description</th>
                  <th className="table-head-background">Maximum Marks</th>
                  <th className="table-head-background">Obtained Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="main-row">
                  <th colSpan={3}>Programming with C++</th>
                </tr>
                <tr>
                  <th>Continuous Assessment</th>
                  <th>100</th>
                  <th>92</th>
                </tr>
                <tr>
                  <th>Attendance</th>
                  <th>5</th>
                  <th>5</th>
                </tr>
                <tr>
                  <th>Mid Term Exam</th>
                  <th>30</th>
                  <th>28</th>
                </tr>
                <tr>
                  <th>End Term Exam</th>
                  <th>60</th>
                  <th>57</th>
                </tr>
                <tr className="main-row">
                  <th colSpan={3}>Web development</th>
                </tr>
                <tr>
                  <th>Continuous Assessment</th>
                  <th>100</th>
                  <th>92</th>
                </tr>
                <tr>
                  <th>Attendance</th>
                  <th>5</th>
                  <th>5</th>
                </tr>
                <tr>
                  <th>Mid Term Exam</th>
                  <th>30</th>
                  <th>28</th>
                </tr>
                <tr>
                  <th>End Term Exam</th>
                  <th>60</th>
                  <th>57</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          role="tabpanel"
          className={`tab-pane fade ${
            activeTab === "grades" ? "in active" : ""
          }`}
          id="grades"
        >
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="table-head-background">Sr. No.</th>
                  <th className="table-head-background">Course Name</th>
                  <th className="table-head-background">Grade</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td align="left">
                    <span style={{ fontSize: "large", fontWeight: "bold" }}>
                      CGPA :: 6.25
                    </span>
                  </td>
                </tr>
              </tfoot>
              <tbody>
                <tr className="main-row">
                  <th colSpan={3}>TermId : 1 TGPA : 9.0</th>
                </tr>
                {grades
                  .filter((data) => data?.termId === 123)
                  .map((grade, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{grade.course}</td>
                      <td>{grade.grade}</td>
                    </tr>
                  ))}
                <tr className="main-row">
                  <th colSpan={3}>TermId : 2 TGPA : 9.5</th>
                </tr>
                {grades
                  .filter((data) => data?.termId === 1234)
                  .map((grade, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{grade.course}</td>
                      <td>{grade.grade}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PortalLayoutWrapper>
  );
};

export default ExamResult;
