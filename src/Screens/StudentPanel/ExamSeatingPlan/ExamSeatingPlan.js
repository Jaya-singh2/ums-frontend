import React from "react";
import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";
import "./ExamSeatingPlan.css";

const ExamSeatingPlan = () => {
  const timetable = [
    {
      courseCode: "MATH101",
      courseName: "Mathematics",
      examType: "Final",
      roomNo: "101",
      reportingTime: "9:30 AM",
      date: "2024-08-01",
      time: "10:00 AM - 12:00 PM",
      detaineeStatus: "No",
      defaulterDetail: "None",
      instructions: "Bring calculator",
      seatingPlan: "A1",
    },
    {
      courseCode: "PHY101",
      courseName: "Physics",
      examType: "Final",
      roomNo: "102",
      reportingTime: "9:30 AM",
      date: "2024-08-02",
      time: "10:00 AM - 12:00 PM",
      detaineeStatus: "No",
      defaulterDetail: "None",
      instructions: "Bring lab coat",
      seatingPlan: "B1",
    },
    {
      courseCode: "CHEM101",
      courseName: "Chemistry",
      examType: "Final",
      roomNo: "103",
      reportingTime: "9:30 AM",
      date: "2024-08-03",
      time: "10:00 AM - 12:00 PM",
      detaineeStatus: "No",
      defaulterDetail: "None",
      instructions: "Bring periodic table",
      seatingPlan: "C1",
    },
  ];
  return (
    <PortalLayoutWrapper>
      <div>
        <h5>Seating Plan</h5>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr className="table-row-custom-font">
                <th className="table-head-background">Course Code</th>
                <th className="table-head-background">Course Name</th>
                <th className="table-head-background">Exam Type</th>
                <th className="table-head-background">Room No.</th>
                <th className="table-head-background">Reporting Time</th>
                <th className="table-head-background">Date</th>
                <th className="table-head-background">Time</th>
                <th className="table-head-background">Detainee Status</th>
                <th className="table-head-background">Defaulter Detail</th>
                <th className="table-head-background">Instructions</th>
                <th className="table-head-background">Seating Plan</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((exam, index) => (
                <tr key={index} className="table-row-custom-font">
                  <td>{exam.courseCode}</td>
                  <td>{exam.courseName}</td>
                  <td>{exam.examType}</td>
                  <td>{exam.roomNo}</td>
                  <td>{exam.reportingTime}</td>
                  <td>{exam.date}</td>
                  <td>{exam.time}</td>
                  <td>{exam.detaineeStatus}</td>
                  <td>{exam.defaulterDetail}</td>
                  <td>{exam.instructions}</td>
                  <td>{exam.seatingPlan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalLayoutWrapper>
  );
};

export default ExamSeatingPlan;
