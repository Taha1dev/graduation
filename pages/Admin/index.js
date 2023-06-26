import Link from 'next/link';
import styles from '@/styles/Admin/Dash.module.css';
import Layout from '@/components/Admin/Layout';
import { Container, Row } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { stateContext } from '@/Context/ContextProvider';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const { token } = useContext(stateContext);

  // Protected Route

  // useEffect(() => {
  //   if (!token) {
  //     router.push('/Home/Login');
  //   }
  // }, [token]);
  return (
    <>
      <Layout>
        <Container>
          <Row>
            <div className="d-flex justify-content-center align-content-center col m-2">
              <Link
                href="/Admin/AdminDoctors"
                className={`${styles['link-none']}`}
              >
                <div className={`card ${styles['card-type']}`}>
                  <div className="card-body">
                    <img src="/svgs/card-doc.svg" alt="" className="ms-3" />
                    <p className={`${styles['card-tit']}`}>DOCTORS</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="d-flex justify-content-center align-content-center col m-2">
              <Link
                href="/Admin/Appointment"
                className={`${styles['link-none']}`}
              >
                <div className={`card ${styles['card-type']}`}>
                  <div className="card-body">
                    <img src="/svgs/app-pic.svg" alt="" className="ms-4" />
                    <p className={`${styles['card-tit']} ms-1`}>APPOINTMENT</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="d-flex justify-content-center align-content-center col m-2">
              <Link href="/Admin/Deaths" className={`${styles['link-none']}`}>
                <div className={`card ${styles['card-type']}`}>
                  <div className="card-body">
                    <img src="/svgs/death-pic.svg" alt="" className="ms-1" />
                    <p className={`${styles['card-tit']}`}>Deaths</p>
                  </div>
                </div>
              </Link>
            </div>
            
          </Row>
          <Row>


            <div className="d-flex justify-content-center align-content-center col m-2">
              <Link href="/Admin/Nurse" className={`${styles['link-none']}`}>
                <div className={`card ${styles['card-type']}`}>
                  <div className="card-body">
                    <img src="/svgs/nurse-pic.svg" alt="" className="ms-1" />
                    <p className={`${styles['card-tit']}`}>NURSE</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="d-flex justify-content-center align-content-center col m-2">
              <Link href="/Admin/Medicine" className={`${styles['link-none']}`}>
                <div className={`card ${styles['card-type']}`}>
                  <div className="card-body">
                    <img src="/svgs/MEDICINE-pic.svg" alt="" className="ms-3" />
                    <p className={`${styles['card-tit']}`}>MEDICINE</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="d-flex justify-content-center align-content-center col m-2">
              <Link
                href="/Admin/BloodBank"
                className={`${styles['link-none']}`}
              >
                <div className={`card ${styles['card-type']}`}>
                  <div className="card-body">
                    <img src="/svgs/blood-pic.svg" alt="" className="ms-4" />
                    <p className={`${styles['card-tit']}`}>Blood Bank</p>
                  </div>
                </div>
              </Link>
            </div>
          </Row>
          <Row>
            <div className="d-flex justify-content-center align-content-center col m-2">
              <Link
                href="/Admin/WareHouse"
                className={`${styles['link-none']}`}
              >
                <div className={`card ${styles['card-type']}`}>
                  <div className="card-body">
                    <img src="/svgs/tools-pic.svg" alt="" className="ms-5" />
                    <p className={`${styles['card-tit']} ms-1`}>
                      Warehouse Tools
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="d-flex justify-content-center align-content-center col m-2">
              <Link href="/Admin/Tests" className={`${styles['link-none']}`}>
                <div className={`card ${styles['card-type']}`}>
                  <div className="card-body">
                    <img src="/svgs/test-pic.svg" alt="" className="ms-4" />
                    <p className={`${styles['card-tit']}`}>Test results</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="d-flex justify-content-center align-content-center col m-2">
              <Link href="/Admin/Patients" className={`${styles['link-none']}`}>
                <div className={`card ${styles['card-type']}`}>
                  <div className="card-body">
                    <img src="/svgs/PATIENTS.svg" alt="" className="ms-3" />
                    <p className={`${styles['card-tit']}`}>PATIENTS</p>
                  </div>
                </div>
              </Link>
            </div>
          </Row>
        </Container>
      </Layout>
    </>
  );
};
export default Home;
