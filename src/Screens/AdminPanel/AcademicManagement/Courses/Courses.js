import React, { useState } from 'react';
import LayoutWrapper from '../../../../Component/LayoutWrapper/PortalLayoutWrapper.js';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([
        { id: 1, code: 'CS101', name: 'CSE ()', subjects: 5, students: 30, duration: '4 Semesters', tuitionFee:'40,000', examFee:'3000' },
        { id: 2, code: 'MATH301', name: 'Advanced Mathematics', subjects: 6, students: 25, duration: '3 Years', tuitionFee:'45,000', examFee:'4000' },
    ]);

    const [newCourse, setNewCourse] = useState({
        code: '',
        name: '',
        subjects: 0,
        students: 0,
        durationType: 'Semesters',
        totalDuration: '',
        tuitionFee: '',
        examFee: ''
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCourse({
            ...newCourse,
            [name]: value,
        });
    };

    const handleAddCourse = () => {
        const newCourseData = {
            id: courses.length + 1,
            code: newCourse.code,
            name: newCourse.name,
            subjects: newCourse.subjects,
            students: newCourse.students,
            duration: `${newCourse.totalDuration} ${newCourse.durationType}`,
            tuitionFee: newCourse.tuitionFee,
            examFee: newCourse.examFee
        };
        setCourses([...courses, newCourseData]);
        setNewCourse({
            code: '',
            name: '',
            subjects: 0,
            students: 0,
            durationType: 'Semesters',
            totalDuration: '',
            tuitionFee: '',
            examFee: ''
        });
    };

    return (
        <LayoutWrapper>
            <div className="main-content bg-lighter">
                <section className="content-section">
                    <div className="single-service w-100">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mr-auto">All Courses</h5>
                            <button
                                className="btn btn-light-background ml-auto"
                                data-toggle="modal"
                                data-target="#addCourseModal"
                            >
                                Add Courses
                            </button>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr className="table-row-custom-font">
                                        <th className="table-head-background">Index</th>
                                        <th className="table-head-background">Course Code</th>
                                        <th className="table-head-background">Course Name</th>
                                        <th className="table-head-background">Subjects</th>
                                        <th className="table-head-background">Students</th>
                                        <th className="table-head-background">Total Sem/Year</th>
                                        <th className="table-head-background">Tuition Fee/Sem</th>
                                        <th className="table-head-background">Exam Fee/Sem</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {courses.map((course, index) => (
                                        <tr key={course.id} className="table-row-custom-font">
                                            <td>{index + 1}</td>
                                            <td>{course.code}</td>
                                            <td>{course.name}</td>
                                            <td>{course.subjects}</td>
                                            <td>{course.students}</td>
                                            <td>{course.duration}</td>
                                            <td>{course.tuitionFee}</td>
                                            <td>{course.examFee}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </section>

                {/* Add Course Modal */}
                <div
                    className="modal fade"
                    id="addCourseModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="addCourseModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addCourseModalLabel">
                                    Add New Course
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="courseCode">Course Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="courseCode"
                                            name="code"
                                            value={newCourse.code}
                                            onChange={handleInputChange}
                                            placeholder="Enter course code"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="courseName">Course Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="courseName"
                                            name="name"
                                            value={newCourse.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter course name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="durationType">Select Sem/Year</label>
                                        <select
                                            className="form-control"
                                            id="durationType"
                                            name="durationType"
                                            value={newCourse.durationType}
                                            onChange={handleInputChange}
                                        >
                                            <option value="Semesters">Semesters</option>
                                            <option value="Years">Years</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="totalDuration">Total Sem/Year</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="totalDuration"
                                            name="totalDuration"
                                            value={newCourse.totalDuration}
                                            onChange={handleInputChange}
                                            placeholder="Enter total Sem/Year"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tuitionFee">Tuition Fee/Sem</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="tuitionFee"
                                            name="tuitionFee"
                                            value={newCourse.tuitionFee}
                                            onChange={handleInputChange}
                                            placeholder="Enter tuition fee"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="examFee">Exam Fee/Sem</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="examFee"
                                            name="examFee"
                                            value={newCourse.examFee}
                                            onChange={handleInputChange}
                                            placeholder="Enter exam fee"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-light-background"
                                        onClick={handleAddCourse}
                                        data-dismiss="modal"
                                    >
                                        Add Course
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
};

export default Courses;
