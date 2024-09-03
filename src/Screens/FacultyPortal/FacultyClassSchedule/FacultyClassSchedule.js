import React, { useState, useEffect } from "react";
import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";

const FacultyClassSchedule = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [schedule, setSchedule] = useState([]);

  const sections = ["Section A", "Section B", "Section C"]; // Replace with actual sections
  const courses = ["Mathematics", "Physics", "Chemistry"]; // Replace with actual courses
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]; // Days of the week

  useEffect(() => {
    // Fetch schedule data from an API or database based on selected filters
    const fetchScheduleData = async () => {
      // Replace with your data fetching logic
      const data = [
        { course: "Mathematics", section: "Section A", day: "Monday", time: "09:00 AM - 10:00 AM" },
        { course: "Physics", section: "Section B", day: "Tuesday", time: "10:00 AM - 11:00 AM" },
        // More data...
      ];
      setSchedule(data.filter((item) =>
        (selectedSection ? item.section === selectedSection : true) &&
        (selectedCourse ? item.course === selectedCourse : true) &&
        (selectedDay ? item.day === selectedDay : true)
      ));
    };

    fetchScheduleData();
  }, [selectedSection, selectedCourse, selectedDay]);

  return (
    <PortalLayoutWrapper>
      <section className="content-section">
        <h5>Faculty Class Schedule</h5>

          {/* Section Selection */}
          <div className="form-group">
            <label htmlFor="section">Section:</label>
            <select
              id="section"
              className="form-control"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
            >
              <option value="">All Sections</option>
              {sections.map((section, index) => (
                <option key={index} value={section}>
                  {section}
                </option>
              ))}
            </select>
          </div>

          {/* Course Selection */}
          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <select
              id="course"
              className="form-control"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">All Courses</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Day Selection */}
          <div className="form-group">
            <label htmlFor="day">Day:</label>
            <select
              id="day"
              className="form-control"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              <option value="">All Days</option>
              {days.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

        {/* Schedule Table */}
        <table className="table table-bordered mt-4">
          <thead className="thead-light">
            <tr>
              <th>Course</th>
              <th>Section</th>
              <th>Day</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {schedule.length > 0 ? (
              schedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.course}</td>
                  <td>{item.section}</td>
                  <td>{item.day}</td>
                  <td>{item.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No schedule available for the selected criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </PortalLayoutWrapper>
  );
};

export default FacultyClassSchedule;
