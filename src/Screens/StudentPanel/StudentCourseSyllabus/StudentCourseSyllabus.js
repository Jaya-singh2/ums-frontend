import React from "react";
import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";

const StudentCourseSyllabus = () => {
  const btechCSECourseSyllabus = {
    courseName: "B.Tech in Computer Science and Engineering",
    courseDuration: "4 Years",
    totalSemesters: "8 Semester",
    syllabus: [
      {
        semester: "1st Semester",
        subjects: [
          {
            subjectCode: "CS101",
            subjectName: "Introduction to Computer Science",
            subjectType: "Core",
            credits: 4,
            theoryMarks: 70,
            practicalMarks: 30,
            instructor: "Dr. Smith",
            schedule: "Mon/Wed/Fri, 10-11 AM"
          },
          {
            subjectCode: "MATH101",
            subjectName: "Calculus I",
            subjectType: "Core",
            credits: 3,
            theoryMarks: 80,
            practicalMarks: 20,
            instructor: "Dr. Jones",
            schedule: "Tue/Thu, 9-10 AM"
          },
        ]
      },
      {
        semester: "2nd Semester",
        subjects: [
          {
            subjectCode: "CS102",
            subjectName: "Data Structures",
            subjectType: "Core",
            credits: 4,
            theoryMarks: 70,
            practicalMarks: 30,
            instructor: "Dr. Williams",
            schedule: "Mon/Wed/Fri, 11-12 AM"
          },
          {
            subjectCode: "PHY101",
            subjectName: "Physics I",
            subjectType: "Core",
            credits: 4,
            theoryMarks: 70,
            practicalMarks: 30,
            instructor: "Dr. Brown",
            schedule: "Mon/Wed/Fri, 1-2 PM"
          },
        ]
      },
      {
        semester: "3rd Semester",
        subjects: [
          {
            subjectCode: "CS801",
            subjectName: "Machine Learning",
            subjectType: "Elective",
            credits: 3,
            theoryMarks: 100,
            practicalMarks: 0,
            instructor: "Dr. Davis",
            schedule: "Tue/Thu, 2-3 PM"
          },
          {
            subjectCode: "CS802",
            subjectName: "Cyber Security",
            subjectType: "Core",
            credits: 3,
            theoryMarks: 70,
            practicalMarks: 30,
            instructor: "Dr. Patel",
            schedule: "Mon/Wed/Fri, 9-10 AM"
          },
        ]
      },
      {
        semester: "4th Semester",
        subjects: [
          {
            subjectCode: "IN801",
            subjectName: "Full Stack development",
            subjectType: "Elective",
            credits: 3,
            theoryMarks: 100,
            practicalMarks: 0,
            instructor: "Dr. Davis",
            schedule: "Tue/Thu, 2-3 PM"
          },
          {
            subjectCode: "CS800",
            subjectName: "Operating System",
            subjectType: "Core",
            credits: 3,
            theoryMarks: 70,
            practicalMarks: 30,
            instructor: "Dr. Patel",
            schedule: "Mon/Wed/Fri, 9-10 AM"
          },
        ]
      }
    ]
  };


  return (
    <PortalLayoutWrapper>
      <div className="main-content bg-lighter">
        <section className="content-section">
          <div className="single-service w-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-left">{btechCSECourseSyllabus?.courseName }{" "}({btechCSECourseSyllabus?.courseDuration} - {btechCSECourseSyllabus?.totalSemesters})</h5>
            </div>
            <div className="table-responsive col-md-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className='table-head-background'>Subject Code</th>
                    <th className='table-head-background'>Subject Name</th>
                    <th className='table-head-background'>Type</th>
                    <th className='table-head-background'>Credits</th>
                    <th className='table-head-background'>Theory Marks</th>
                    <th className='table-head-background'>Practical Marks</th>
                    <th className='table-head-background'>Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  {btechCSECourseSyllabus?.syllabus?.map((subject, index) => (
                    <>  <tr key={index}>
                      <td colSpan="9" style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: '#f2f2f2' }}>
                        {subject.semester}
                      </td>
                    </tr>
                      {subject.subjects?.map((subject, index) => (
                        <tr key={index}>
                          <td><a href="/PDFS/frmCourseSyllabus.aspx">{subject.subjectCode}</a></td>
                          <td>{subject.subjectName}</td>
                          <td>{subject.subjectType}</td>
                          <td>{subject.credits}</td>
                          <td>{subject.theoryMarks}</td>
                          <td>{subject.practicalMarks}</td>
                          <td>{subject.instructor}</td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </PortalLayoutWrapper>
  );
};

export default StudentCourseSyllabus;
