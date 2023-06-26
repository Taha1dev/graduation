import BackButton from '@/components/Admin/BackButton';
import DynamicTable from '@/components/Admin/DynamicTable';
import Layout from '@/components/Admin/Layout';
import React, { useState } from 'react';
import styles from '@/styles/Admin/UsersPage.module.css';
import { Container } from 'react-bootstrap';

const Employees = () => {
  const columns = [
    'id',
    'user_id',
    'EmployeeType',
    'NationalNumber',
    'DepartmentID',
    'DepartmentName',
    'FirstName',
    'LastName',
    'email',
    'password',
    'Address',
    'HireDate',
    'Gender',
    'BirthDate',
    'Salary',
    'ManagerID',

  ]
  const [data, setData] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@example.com' },
    {
      id: 3,
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bobsmith@example.com',
    },
    {
      id: 4,
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alicejohnson@example.com',
    },
  ]);

  const handleDelete = (id) => {
    // Handle deleting data
  };

  const handleEdit = (id) => {
    // Handle editing data
  };
  return (
    <Layout>
      {' '}
      <BackButton />
      <Container>
        <div className={`row d-flex justify-content-between`}>
          <div
            className={`col m-2 ${styles['eye-card']} position-relative d-flex`}
          >
            <div className={`card ${styles.card}`}>
              <img
                src="/svgs/doctor.svg"
                alt=""
                className={`mt-3 ${styles.img}`}
              />
            </div>
            <div className={`card-t ms-5 mt-2 text-center ${styles['card-t']}`}>
              <p>Doctors</p>
              <h4 className={`card-num ${styles['card-num']}`}>14</h4>
            </div>
          </div>
          <div
            className={`col m-2 ${styles['eye-card']} position-relative d-flex`}
          >
            <div className={`card ${styles.card}`}>
              <img
                src="/svgs/employeessvg.svg"
                alt=""
                className={`mt-3 ${styles.img}`}
              />
            </div>
            <div className={`card-t ms-5 mt-2 text-center ${styles['card-t']}`}>
              <p>Nurses</p>
              <h4 className={`card-num ${styles['card-num']}`}>70</h4>
            </div>
          </div>
        
        </div>
        <DynamicTable
                            name={'Employees'}
                            data={data}
                            columns={columns}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                    />
      </Container>
    </Layout>
  );
};

export default Employees;
