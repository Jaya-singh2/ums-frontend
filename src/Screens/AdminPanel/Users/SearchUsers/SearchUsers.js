import React, { useState } from 'react';
import LayoutWrapper from '../../../../Component/LayoutWrapper/PortalLayoutWrapper.js';

const UserSearch = () => {
    const [filters, setFilters] = useState({
        userType: '',
        course: '',
        semYear: '',
        searchTerm: '',
    });

    const [filteredUsers, setFilteredUsers] = useState([]);

    const users = [
        {
            userType: 'Student',
            rollNumber: '101',
            name: 'John Doe',
            courseName: 'Computer Science',
            semYear: '1st Year',
            class: 'CS101',
        },
        {
            userType: 'Faculty',
            rollNumber: 'F001',
            name: 'Dr. Alice Johnson',
            courseName: 'Computer Science',
            semYear: '2nd Year',
            class: 'CS102',
        },
        {
            userType: 'Student',
            rollNumber: '102',
            name: 'Jane Smith',
            courseName: 'Mathematics',
            semYear: '1st Year',
            class: 'M101',
        },
        // Add more users as needed
    ];

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const handleFilter = () => {
        const filtered = users.filter((user) => {
            return (
                (filters.userType === '' || user.userType === filters.userType) &&
                (filters.course === '' || filters.course === 'All Courses' || user.courseName === filters.course) &&
                (filters.semYear === '' || filters.semYear === 'All Semesters' || user.semYear === filters.semYear) &&
                (filters.searchTerm === '' || user.name.toLowerCase().includes(filters.searchTerm.toLowerCase()))
            );
        });
        setFilteredUsers(filtered);
    };

    return (
        <LayoutWrapper>
            <div className="main-content bg-lighter">
                <section className="content-section">
                    <div className="single-service w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="text-left">User Search</h5>
                        </div>

                        <div>
                            <div className="form-group col-md-3">
                                <label>Select User Type</label>
                                <select
                                    name="userType"
                                    className="form-control"
                                    value={filters.userType}
                                    onChange={handleChange}
                                >
                                    <option value="">All Users</option>
                                    <option value="Student">Student</option>
                                    <option value="Faculty">Faculty</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label>Select Course</label>
                                <select
                                    name="course"
                                    className="form-control"
                                    value={filters.course}
                                    onChange={handleChange}
                                >
                                    <option value="All Courses">All Courses</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Mathematics">Mathematics</option>
                                    {/* Add more courses */}
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label>Select Sem/Year</label>
                                <select
                                    name="semYear"
                                    className="form-control"
                                    value={filters.semYear}
                                    onChange={handleChange}
                                >
                                    <option value="All Semesters">All Semesters</option>
                                    <option value="1st Year">1st Year</option>
                                    <option value="2nd Year">2nd Year</option>
                                    {/* Add more sem/years */}
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label>Search</label>
                                <input
                                    type="text"
                                    name="searchTerm"
                                    className="form-control"
                                    value={filters.searchTerm}
                                    onChange={handleChange}
                                    placeholder="Search by name"
                                />
                            </div>
                            <div className='form-group col-md-3  d-flex justify-content-between align-items-center'>
                                <button
                                    className="btn btn-light-background"
                                    onClick={handleFilter}
                                >
                                    Filter
                                </button>
                            </div>

                            {filteredUsers.length > 0 && (
                                <div className="table-responsive col-md-12">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className='table-head-background'>Class</th>
                                                <th className='table-head-background'>Roll Number</th>
                                                <th className='table-head-background'>Name</th>
                                                <th className='table-head-background'>Course Name</th>
                                                <th className='table-head-background'>Sem/Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredUsers.map((user, index) => (
                                                <tr key={index}>
                                                    <td>{user.class}</td>
                                                    <td>{user.rollNumber}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.courseName}</td>
                                                    <td>{user.semYear}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </LayoutWrapper>
    );
};

export default UserSearch;
