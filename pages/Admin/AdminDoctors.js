import Layout from '@/components/Admin/Layout';
import React, { useState } from 'react';
import styles from '@/styles/Admin/AdDoctor.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSort } from '@fortawesome/free-solid-svg-icons';
import Table from '@/components/Admin/Table';
import { Container } from 'react-bootstrap';
import BackButton from '@/components/Admin/BackButton';
import DynamicTable from '@/components/Admin/DynamicTable';
import { columns } from 'fontawesome';

const AdminDoctors = () => {
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
  const columns = 
      [
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
  
  return (
    <Layout>
      {/* <!-- filtter --> */}

      {/* <!-- filtter --> */}
        <BackButton />
        <Container>
  <div className="row p-1 mx-0 justify-content-between">
    <div className="col-5 col-md-3 m-2">
      <Link href="/" className={styles["link-none"]}>
        <div className={`${styles["doc-card"]} p-2`}>
          <img src="/svgs/repr.svg" alt="" className={`${styles["dep-icon"]} m-2`} />
          <div className="d-flex flex-column">
            <p className={`${styles["dep-title"]} mb-0`}>Reproductive Department</p>
            <p className={`${styles["dep-count"]} m-2`}>
              <span className={`${styles["dep-count-label"]}`}>Doctors:</span> 22
            </p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-5 col-md-3 m-2">
      <Link href="/" className={styles["link-none"]}>
        <div className={`${styles["doc-card"]} p-2`}>
          <img src="/svgs/child.svg" alt="" className={`${styles["dep-icon"]} m-2`} />
          <div className="d-flex flex-column">
            <p className={`${styles["dep-title"]} mb-0`}>Children Department</p>
            <p className={`${styles["dep-count"]} m-2`}>
              <span className={`${styles["dep-count-label"]}`}>Doctors:</span> 22
            </p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-5 col-md-3 m-2">
      <Link href="/" className={styles["link-none"]}>
        <div className={`${styles["doc-card"]} p-2`}>
          <img src="/svgs/heart.svg" alt="" className={`${styles["dep-icon"]} m-2`} />
          <div className="d-flex flex-column">
            <p className={`${styles["dep-title"]} mb-0`}>Heart Department</p>
            <p className={`${styles["dep-count"]} m-2`}>
              <span className={`${styles["dep-count-label"]}`}>Doctors:</span> 22
            </p>
          </div>
        </div>
      </Link>
    </div>
  </div>
  <div className="row p-1 mx-0 justify-content-between">
    <div className="col-5 col-md-3 m-2">
      <Link href="/" className={styles["link-none"]}>
        <div className={`${styles["doc-card"]} p-2`}>
          <img src="/svgs/bone.svg" alt="" className={`${styles["dep-icon"]} m-2`} />
          <div className="d-flex flex-column">
            <p className={`${styles["dep-title"]} mb-0`}>Osteomyelitis Department</p>
            <p className={`${styles["dep-count"]} m-2`}>
              <span className={`${styles["dep-count-label"]}`}>Doctors:</span> 22
            </p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-5 col-md-3 m-2">
      <Link href="/" className={styles["link-none"]}>
        <div className={`${styles["doc-card"]} p-2`}>
          <img src="/svgs/res.svg" alt="" className={`${styles["dep-icon"]} m-2`} />
          <div className="d-flex flex-column">
            <p className={`${styles["dep-title"]} mb-0`}>Respiratory Department</p>
            <p className={`${styles["dep-count"]} m-2`}>
              <span className={`${styles["dep-count-label"]}`}>Doctors:</span> 22
            </p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-5 col-md-3 m-2">
      <Link href="/" className={styles["link-none"]}>
        <div className={`${styles["doc-card"]} p-2`}>
          <img src="/svgs/sur.svg" alt="" className={`${styles["dep-icon"]} m-2`} />
          <div className="d-flex flex-column">
            <p className={`${styles["dep-title"]} mb-0`}>Surgery Department</p>
            <p className={`${styles["dep-count"]} m-2`}>
              <span className={`${styles["dep-count-label"]}`}>Doctors:</span> 22
            </p>
          </div>
        </div>
      </Link>
    </div>
  </div>
  <div className="row p-1 mx-0 justify-content-between">
    <div className="col-5 col-md-3 m-2">
      <Link href="/" className={styles["link-none"]}>
        <div className={`${styles["doc-card"]} p-2`}>
          <img src="/public/svgs/" alt="" className={`${styles["dep-icon"]} m-2`} />
          <div className="d-flex flex-column">
            <p className={`${styles["dep-title"]} mb-0`}>Nervous Department</p>
            <p className={`${styles["dep-count"]} m-2`}>
              <span className={`${styles["dep-count-label"]}`}>Doctors:</span> 22
            </p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-5 col-md-3 m-2">
      <Link href="/" className={styles["link-none"]}>
        <div className={`${styles["doc-card"]} p-2`}>
          <img src="/svgs/eye.svg" alt="" className={`${styles["dep-icon"]} m-2`} />
          <div className="d-flex flex-column">
            <p className={`${styles["dep-title"]} mb-0`}>Eye Department</p>
            <p className={`${styles["dep-count"]} m-2`}>
              <span className={`${styles["dep-count-label"]}`}>Doctors:</span> 22
            </p>
          </div>
        </div>
      </Link>
    </div>
    <div className="col-5 col-md-3 m-2">
      <Link href="/" className={styles["link-none"]}>
        <div className={`${styles["doc-card"]} p-2`}>
          <img src="/svgs/dental.svg" alt="" className={`${styles["dep-icon"]} m-2`} />
          <div className="d-flex flex-column">
            <p className={`${styles["dep-title"]} mb-0`}>Dental Department</p>
            <p className={`${styles["dep-count"]} m-2`}>
              <span className={`${styles["dep-count-label"]}`}>Doctors:</span> 22
            </p>
          </div>
        </div>
      </Link>
    </div>
  </div>
</Container>
      {/* <!-- table --> */}
      <section className="intro">
        <div className="bg-image h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className={`${styles.card}`}>
                    <div className="card-body p-0">
                      <div
                        className="table-responsive table-scroll"
                        data-mdb-perfect-scrollbar="true"
                        style={{ position: 'relative', height: 'fit-content' }}
                      >
                        <DynamicTable
                            name = 'Doctors'
                            data={data}
                            columns={columns}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                            />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminDoctors;
