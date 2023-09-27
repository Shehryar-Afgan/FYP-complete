import React, { useState } from 'react';
import Sidebar from '../Navbar/Sidebar';
import AdminSidebar from '../Navbar/AdminSidebar';

// components
import AddAcademics from './AddAcademic';
import UpdateUniversity from './UpdateUniversity';
import CalculateAggregate from './CalculateAggregate';
import ApplicableInstitutes from './ApplicableInstitues';
import AdmissionGuidelines from './AdmissionGuidelines';
import { useSelector } from 'react-redux';

const Academics = () => {
  const { user } = useSelector((state) => state.authReducer);
  const [selectedTab, setSelectedTab] = useState(
    user.role === 0 ? 'Add Academics' : 'Add University'
  );
  const [userAggregate, setUserAggregate] = useState(0.0);

  const changeSelectedTab = (e) => {
    setSelectedTab(e.target.innerHTML);
  };

  const tabs = [
    {
      placeholder: 'Add Academics',
      className: `nav-link ${selectedTab === 'Add Academics' ? 'active' : ''}`,
      id: 'ex1-tab-1',
      'data-mdb-toggle': 'tab',
      href: '#ex1-tabs-1',
      role: 'tab',
      'aria-controls': 'ex1-tabs-1',
      'aria-selected': 'true',
      onClick: (e) => {
        changeSelectedTab(e);
      },
      userRole: [0],
    },
    {
      placeholder: 'Add University',
      className: `nav-link ${
        selectedTab === 'Update University' ? 'active' : ''
      }`,
      'data-mdb-toggle': 'tab',
      role: 'tab',
      onClick: (e) => {
        changeSelectedTab(e);
      },
      userRole: [1],
    },
    {
      placeholder: 'Aggregate Calculator',
      className: `nav-link ${
        selectedTab === 'Aggregate Calculator' ? 'active' : ''
      }`,
      'data-mdb-toggle': 'tab',
      role: 'tab',
      onClick: (e) => {
        changeSelectedTab(e);
      },
      userRole: [0],
    },
    {
      placeholder: 'Applicable Institutes',
      className: `nav-link ${
        selectedTab === 'Aggregate Calculator' ? 'active' : ''
      }`,
      'data-mdb-toggle': 'tab',
      role: 'tab',
      onClick: (e) => {
        changeSelectedTab(e);
      },
      userRole: [0],
    },
    {
      placeholder: 'Admission Guidelines',
      className: `nav-link ${
        selectedTab === 'Aggregate Calculator' ? 'active' : ''
      }`,
      'data-mdb-toggle': 'tab',
      role: 'tab',
      onClick: (e) => {
        changeSelectedTab(e);
      },
      userRole: [0, 1],
    },
  ];

  return (
    <div>
      <div className='row p-0 m-0'>
        <div className='col-3 m-0 me-5 p-0' style={{ minHeight: '100vh' }}>
          {user.role === 0 ? <Sidebar /> : <AdminSidebar />}
        </div>
        <div className='col mt-5'>
          <div className='container'>
            <div className='d-flex flex-column align-items-center'>
              <h1>Academics</h1>
              <ul
                className='nav nav-tabs mb-3 nav-fill'
                id='ex1'
                role='tablist'
              >
                {tabs.map((x, idx) => {
                  return (
                    x.userRole.includes(user.role) && (
                      <li {...x} key={`${idx}`}>
                        {x.placeholder}
                      </li>
                    )
                  );
                })}
              </ul>

              <div className='tab-content w-100'>
                <div className='tab-pane fade show active' role='tabpanel'>
                  {selectedTab === 'Add Academics' ? (
                    <AddAcademics />
                  ) : selectedTab === 'Add University' ? (
                    <UpdateUniversity />
                  ) : selectedTab === 'Aggregate Calculator' ? (
                    <CalculateAggregate
                      aggregate={userAggregate}
                      setAggregate={setUserAggregate}
                    />
                  ) : selectedTab === 'Applicable Institutes' ? (
                    <ApplicableInstitutes aggregate={userAggregate} />
                  ) : (
                    <AdmissionGuidelines />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
