import React from "react";
import PortalLayoutWrapper from "../../../Component/LayoutWrapper/PortalLayoutWrapper";
//import jsPDF from "jspdf";
//import "jspdf-autotable"; // Optional for table styling

const FeeStatementPage = () => {
  const feeDetails = {
    studentName: "John Doe",
    program: "React Development",
    semesters: [
      {
        semester: "Semester 1",
        totalFee: "$600",
        paid: "$400",
        outstanding: "$200",
      },
      {
        semester: "Semester 2",
        totalFee: "$600",
        paid: "$400",
        outstanding: "$200",
      },
    ],
    examFee: {
      totalExamFee: "$150",
      paidExamFee: "$100",
      outstandingExamFee: "$50",
    },
  };
  const generatePDF = () => {};

  //   const generatePDF = () => {
  //     const doc = new jsPDF();
  //     doc.text("Fee Statement", 20, 20);
  //     doc.text(`Student Name: ${feeDetails.studentName}`, 20, 30);
  //     doc.text(`Program: ${feeDetails.program}`, 20, 40);

  //     let yOffset = 50;
  //     feeDetails.semesters.forEach((semester, index) => {
  //       doc.text(`Semester ${index + 1}: ${semester.semester}`, 20, yOffset);
  //       doc.text(`Total Fee: ${semester.totalFee}`, 20, yOffset + 10);
  //       doc.text(`Paid: ${semester.paid}`, 20, yOffset + 20);
  //       doc.text(`Outstanding: ${semester.outstanding}`, 20, yOffset + 30);
  //       yOffset += 40; // Move to the next section
  //     });

  //     // Exam Fee Details
  //     doc.text("Exam Fees", 20, yOffset);
  //     doc.text(
  //       `Total Exam Fee: ${feeDetails.examFee.totalExamFee}`,
  //       20,
  //       yOffset + 10
  //     );
  //     doc.text(
  //       `Paid Exam Fee: ${feeDetails.examFee.paidExamFee}`,
  //       20,
  //       yOffset + 20
  //     );
  //     doc.text(
  //       `Outstanding Exam Fee: ${feeDetails.examFee.outstandingExamFee}`,
  //       20,
  //       yOffset + 30
  //     );

  //     // Save the PDF
  //     doc.save("Full_Fee_Statement.pdf");
  //   };

  return (
    <PortalLayoutWrapper>
      <div className="fee-statement-page">
        <div className="fee-details">
          <p>
            <strong>Student Name:</strong> {feeDetails.studentName}
          </p>
          <p>
            <strong>Program:</strong> {feeDetails.program}
          </p>

          <h5>Semester Fees</h5>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="table-head-background">Semester</th>
                  <th className="table-head-background">Total Fee</th>
                  <th className="table-head-background">Paid</th>
                  <th className="table-head-background">Outstanding</th>
                </tr>
              </thead>
              <tbody>
                {feeDetails.semesters.map((semester, index) => (
                  <tr key={index}>
                    <td>{semester.semester}</td>
                    <td>{semester.totalFee}</td>
                    <td>{semester.paid}</td>
                    <td>{semester.outstanding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h5>Exam Fees</h5>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="table-head-background">Total Exam Fee</th>
                  <th className="table-head-background">Paid Exam Fee</th>
                  <th className="table-head-background">
                    Outstanding Exam Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{feeDetails.examFee.totalExamFee}</td>
                  <td>{feeDetails.examFee.paidExamFee}</td>
                  <td>{feeDetails.examFee.outstandingExamFee}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button onClick={generatePDF}>Download Full Fee Statement</button>
      </div>
    </PortalLayoutWrapper>
  );
};

export default FeeStatementPage;
