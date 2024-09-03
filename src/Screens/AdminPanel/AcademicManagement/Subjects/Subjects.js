import React, { useState } from 'react';
import LayoutWrapper from '../../../../Component/LayoutWrapper/PortalLayoutWrapper.js';

const initialSubjects = {
    'CS101_1': [
        { id: 1, code: 'CS101-1', name: 'Intro to Programming', semYear: '1st Semester', type: 'Core', theoryMarks: 70, practicalMarks: 30 },
        { id: 2, code: 'CS101-2', name: 'Data Structures', semYear: '1st Semester', type: 'Core', theoryMarks: 80, practicalMarks: 20 },
    ],
    'MATH301_2': [
        { id: 1, code: 'MATH301-1', name: 'Linear Algebra', semYear: '2nd Year', type: 'Optional', theoryMarks: 60, practicalMarks: 40 },
        // Add more initial subjects if needed
    ],
};

const Subjects = () => {
    const [courses] = useState([
        { id: 'CS101', name: 'Computer Science' },
        { id: 'MATH301', name: 'Mathematics' },
        // Add more courses as needed
    ]);

    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedSemYear, setSelectedSemYear] = useState('');
    const [subjects, setSubjects] = useState(initialSubjects);
    const [newSubject, setNewSubject] = useState({
        code: '',
        name: '',
        semYear: '',
        type: 'Core',
        theoryMarks: '',
        practicalMarks: '',
    });

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
        setSelectedSemYear('');
    };

    const handleSemYearChange = (e) => {
        setSelectedSemYear(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSubject({
            ...newSubject,
            [name]: value,
        });
    };

    const handleAddSubject = () => {
        const courseKey = `${selectedCourse}_${selectedSemYear}`;
        const newSubjectData = {
            id: subjects[courseKey]?.length + 1 || 1,
            ...newSubject,
        };

        setSubjects({
            ...subjects,
            [courseKey]: [...(subjects[courseKey] || []), newSubjectData],
        });

        setNewSubject({
            code: '',
            name: '',
            semYear: '',
            type: 'Core',
            theoryMarks: '',
            practicalMarks: '',
        });
    };

    const currentSubjects = subjects[`${selectedCourse}_${selectedSemYear}`] || [];

    return (
        <LayoutWrapper>
            <div className="main-content bg-lighter">
                <section className="content-section">
                    <div className="single-service w-100">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="text-left">Subjects</h5>
                            <button
                                className="btn btn-light-background"
                                data-toggle="modal"
                                data-target="#addSubjectModal"
                            >
                                Add New Subject
                            </button>
                        </div>
                        <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <div className="form-group">
                                    <label htmlFor="courseSelect">Select Course</label>
                                    <select
                                        id="courseSelect"
                                        className="form-control"
                                        value={selectedCourse}
                                        onChange={handleCourseChange}
                                    >
                                        <option value="" disabled>Select Course</option>
                                        {courses.map(course => (
                                            <option key={course.id} value={course.id}>
                                                {course.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                {selectedCourse && (

                                    <div className="form-group">
                                        <label htmlFor="semYearSelect">Select Semester/Year</label>
                                        <select
                                            id="semYearSelect"
                                            className="form-control"
                                            value={selectedSemYear}
                                            onChange={handleSemYearChange}
                                        >
                                            <option value="" disabled>Select Semester/Year</option>
                                            <option value="1">1st Semester</option>
                                            <option value="2">2nd Semester</option>
                                            <option value="3">3rd Semester</option>
                                            <option value="1">1st Year</option>
                                            <option value="2">2nd Year</option>
                                            <option value="3">3rd Year</option>
                                            {/* Add more semester/year options as needed */}
                                        </select>
                                    </div>
                                )}
                            </div>
                        </div>
                        </form>
                        {selectedCourse && selectedSemYear && (
                            <div className="table-responsive col-md-12">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className='table-head-background'>Index</th>
                                            <th className='table-head-background'>Subject Code</th>
                                            <th className='table-head-background'>Subject Name</th>
                                            <th className='table-head-background'>Sem/Year</th>
                                            <th className='table-head-background'>Subject Type</th>
                                            <th className='table-head-background'>Theory Marks</th>
                                            <th className='table-head-background'>Practicals Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentSubjects.map((subject, index) => (
                                            <tr key={subject.id}>
                                                <td>{index + 1}</td>
                                                <td>{subject.code}</td>
                                                <td>{subject.name}</td>
                                                <td>{subject.semYear}</td>
                                                <td>{subject.type}</td>
                                                <td>{subject.theoryMarks}</td>
                                                <td>{subject.practicalMarks}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </section>

                {/* Add Subject Modal */}
                <div
                    className="modal fade"
                    id="addSubjectModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="addSubjectModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addSubjectModalLabel">
                                    Add New Subject
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
                                        <label htmlFor="subjectCode">Subject Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subjectCode"
                                            name="code"
                                            value={newSubject.code}
                                            onChange={handleInputChange}
                                            placeholder="Enter subject code"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subjectName">Subject Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subjectName"
                                            name="name"
                                            value={newSubject.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter subject name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="courseType">Course Type</label>
                                        <select
                                            className="form-control"
                                            id="courseType"
                                            name="type"
                                            value={newSubject.type}
                                            onChange={handleInputChange}
                                        >
                                            <option value="Core">Core</option>
                                            <option value="Optional">Optional</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="theoryMarks">Theory Marks</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="theoryMarks"
                                            name="theoryMarks"
                                            value={newSubject.theoryMarks}
                                            onChange={handleInputChange}
                                            placeholder="Enter theory marks"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="practicalMarks">Practical Marks</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="practicalMarks"
                                            name="practicalMarks"
                                            value={newSubject.practicalMarks}
                                            onChange={handleInputChange}
                                            placeholder="Enter practical marks"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="btn  btn-light-background"
                                        onClick={handleAddSubject}
                                        data-dismiss="modal"
                                    >
                                        Add Subject
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

export default Subjects;
