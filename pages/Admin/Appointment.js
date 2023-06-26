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

const Appointment = () => {
  const [data, setData] = useState([

  ]);

  const handleDelete = (id) => {
    // Handle deleting data
  };

  const handleEdit = (id) => {
    // Handle editing data
  };

  const columns = [
    'id',
    'Patiend-Id',
    'Patiend-Name',
    'Clinic-id',
    'Clinic Name',
    'Doctor-id',
    'Doctor-Name',
    'Appointment Date',
  ]
  return (
    <Layout>
      {/* <!-- filtter --> */}
      <BackButton />
      {/* <!-- filtter --> */}
      <Container>
        <div className="row p-1 mx-0 d-flex ">
          <div className="ms-2 col m-2">
            <Link href="" className={styles['link-none']}>
              <div
                className={`${styles['doc-card']} d-flex align-content-center p-2`}
              >
                <img src="/svgs/repr.svg" alt="" className="m-2" />
                <p className={`m-2 text-uppercase ${styles['dep-title']}`}>
                  reproductive DEpartment
                  <span className="m-2" style={{ color: '#ed221c' }}>
                    22
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="me-2 col m-2">
            <Link href="" className={styles['link-none']}>
              <div
                className={`${styles['doc-card']} d-flex align-content-center p-2`}
              >
                <img src="/svgs/child.svg" alt="" className="m-2" />
                <p className={`m-2 text-uppercase ${styles['dep-title']}`}>
                  childeren DEpartment
                  <span className="m-2" style={{ color: '#ed221c' }}>
                    22
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
      <Container>
        <div className="row p-1 mx-0 d-flex">
          <div className="ms-2 col m-2">
            <Link href="" className={styles['link-none']}>
              <div
                className={`${styles['doc-card']} d-flex align-content-center p-2`}
              >
                <img src="/svgs/heart.svg" alt="" className="m-2" />
                <p className={`m-2 text-uppercase ${styles['dep-title']}`}>
                  HEART DEpartment
                  <span className="m-2" style={{ color: '#ed221c' }}>
                    22
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="me-2 col m-2">
            <Link href="" className={styles['link-none']}>
              <div
                className={`${styles['doc-card']} d-flex align-content-center p-2`}
              >
                <img src="/svgs/bone.svg" alt="" className="m-2" />
                <p className={`m-2 text-uppercase ${styles['dep-title']}`}>
                  osteomyelitis DEpartment
                  <span className="m-2" style={{ color: '#ed221c' }}>
                    22
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
      <Container>
        <div className="row p-1 mx-0 d-flex">
          <div className="ms-2 col m-2">
            <Link href="" className={styles['link-none']}>
              <div
                className={`${styles['doc-card']} d-flex align-content-center p-2`}
              >
                <img src="/svgs/res.svg" alt="" className="m-2" />
                <p className={`m-2 text-uppercase ${styles['dep-title']}`}>
                  Respiratory DEpartment
                  <span className="m-2" style={{ color: '#ed221c' }}>
                    22
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="me-2 col m-2">
            <Link href="" className={styles['link-none']}>
              <div
                className={`${styles['doc-card']} d-flex align-content-center p-2`}
              >
                <img src="/svgs/sur.svg" alt="" className="m-2" />
                <p className={`m-2 text-uppercase ${styles['dep-title']}`}>
                  Surgery DEpartment
                  <span className="m-2" style={{ color: '#ed221c' }}>
                    22
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
      <Container>
        <div className="row p-1  mx-0 d-flex">
          <div className="ms-2 col m-2">
            <Link href="" className={styles['link-none']}>
              <div className={`${styles['doc-card']} d-flex p-2`}>
                <img src="/svgs/ner.svg" alt="" className="m-2" />
                <p className={`m-2 text-uppercase ${styles['dep-title']}`}>
                  nerves DEpartment
                  <span className="m-2" style={{ color: '#ed221c' }}>
                    22
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="me-2 col m-2">
            <Link href="" className={styles['link-none']}>
              <div
                className={`${styles['doc-card']} d-flex align-content-center p-2`}
              >
                <img src="/svgs/eye.svg" alt="" className="m-2" />
                <p className={`m-2 text-uppercase ${styles['dep-title']}`}>
                  Eye DEpartment
                  <span className="m-2" style={{ color: '#ed221c' }}>
                    22
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="row p-1 mx-0 d-flex">
          <div className="ms-2 col m-2">
            <Link href="" className={styles['link-none']}>
              <div className={`${styles['doc-card']} d-flex p-2`}>
                <img src="/svgs/amb.svg" alt="" className="m-2" />
                <p className={`m-2 text-uppercase ${styles['dep-title']}`}>
                  nerves DEpartment
                  <span className="m-2" style={{ color: '#ed221c' }}>
                    22
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="me-2 col m-2">
            <Link href="" className={styles['link-none']}>
              <div
                className={`${styles['doc-card']} d-flex align-content-center p-2`}
              >
                <img src="/svgs/stomach.svg" alt="" className="m-2" />
                <p className={`m-2 text-uppercase ${styles['dep-title']}`}>
                  Eye DEpartment
                  <span className="m-2" style={{ color: '#ed221c' }}>
                    22
                  </span>
                </p>
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
                      name={'Appointment'}
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

export default Appointment;
