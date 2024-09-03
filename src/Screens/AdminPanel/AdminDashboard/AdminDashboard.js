import React from 'react';
import LayoutWrapper from '../../../Component/LayoutWrapper/PortalLayoutWrapper.js';
import './AdminDashboard.css';

const dashboardData = {
  courses: 5,
  students: 150,
  faculties: 20,
  subjects: 10,
};

const AdminDashboard = () => {
  return (
    <LayoutWrapper>
      <div className="main-content bg-lighter">
        <section className="content-section">
          <div className="single-service w-100">
            <h5 className="text-left">Admin Dashboard</h5>

            <div className="row">
              {/* Courses Card */}
              <div className="col-md-6">
                <div className="card dashboard-card mr-10 card-min-height card-width" >
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="icon bg-primary text-white">
                        <i className="fas fa-book"></i>
                      </div>
                      <div className="ml-3">
                        <h6 className="mb-0">Courses</h6>
                        <h3>{dashboardData.courses}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Students Card */}
              <div className="col-md-6" >
                <div className="card dashboard-card card-min-height card-width">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="icon bg-success text-white">
                        <i className="fas fa-user-graduate"></i>
                      </div>
                      <div className="ml-3">
                        <h6 className="mb-0">Students</h6>
                        <h3>{dashboardData.students}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Faculties Card */}
              <div className="col-md-6">
                <div className="card dashboard-card mr-10 card-min-height card-width">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="icon bg-warning text-white">
                        <i className="fas fa-chalkboard-teacher"></i>
                      </div>
                      <div className="ml-3">
                        <h6 className="mb-0">Faculties</h6>
                        <h3>{dashboardData.faculties}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subjects Card */}
              <div className="col-md-6">
                <div className="card dashboard-card card-min-height card-width">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="icon bg-danger text-white">
                        <i className="fas fa-book-reader"></i>
                      </div>
                      <div className="ml-3">
                        <h6 className="mb-0">Subjects</h6>
                        <h3>{dashboardData.subjects}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  );
};

export default AdminDashboard;
