import React from 'react';
import LayoutWrapper from '../../../../Component/LayoutWrapper/PortalLayoutWrapper.js';

const AllUsers = () => {

  return (
    <LayoutWrapper>
      <div className="main-content bg-lighter">
        <section className="content-section">
          <div className="single-service w-100">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="text-left">Users</h5>
            </div>

            <div >
              <div className="table-responsive col-md-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className='table-head-background'>User Profile</th>
                      <th className='table-head-background'>Class</th>
                      <th className='table-head-background'>User Id</th>
                      <th className='table-head-background'>User Name</th>
                      <th className='table-head-background'>Login Date</th>
                      <th className='table-head-background'>Login Time</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  );
};

export default AllUsers;
