import Link from 'next/link';
import styles from '@/styles/Admin/Dash.module.css';
import Layout from '@/components/Admin/Layout';
import { Container, Row } from 'react-bootstrap';
const Home = () => {
  return (
    <>
      <Layout>
        <Container>
          <Row>
            <div className="d-flex justify-content-between">
              <div className="row flex-flex-lg-wrap">
                <div className="col ms-1 mb-1">
                  <Link href="" className={`${styles['link-none']}`}>
                    <div className={`card ${styles['card-type']}`}>
                      <div className="card-body">
                        <img src="/svgs/card-doc.svg" alt="" className="ms-" />
                        <p className={`${styles['card-tit']}`}>DOCTORS</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col ms-1 mb-1">
                  <Link href="#" className={`${styles['link-none']}`}>
                    <div className={`card ${styles['card-type']}`}>
                      <div className="card-body">
                        <img src="/svgs/app-pic.svg" alt="" className="ms-4" />
                        <p className={`${styles['card-tit']} ms-1`}>
                          APPOINTMENT
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col ms-1 mb-1">
                  <Link href="#" className={`${styles['link-none']}`}>
                    <div className={`card ${styles['card-type']}`}>
                      <div className="card-body">
                        <img
                          src="/svgs/death-pic.svg"
                          alt=""
                          className="ms-1"
                        />
                        <p className={`${styles['card-tit']}`}>DEATHS</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col ms-1 mb-1">
                  <Link href="#" className={`${styles['link-none']}`}>
                    <div className={`card ${styles['card-type']}`}>
                      <div className="card-body">
                        <img src="/svgs/PATIENTS.svg" alt="" className="ms-3" />
                        <p className={`${styles['card-tit']}`}>PATIENTS</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col ms-1 mb-1">
                  <Link href="#" className={`${styles['link-none']}`}>
                    <div className={`card ${styles['card-type']}`}>
                      <div className="card-body">
                        <img src="/svgs/beds-pic.svg" alt="" className="" />
                        <p className={`${styles['card-tit']} ms-1 my-0`}>
                          BEDS
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col ms-1 mb-1">
                  <Link href="#" className={`${styles['link-none']}`}>
                    <div className={`card ${styles['card-type']}`}>
                      <div className="card-body">
                        <img
                          src="/svgs/nurse-pic.svg"
                          alt=""
                          className="ms-1"
                        />
                        <p className={`${styles['card-tit']}`}>NURSE</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col ms-1 mb-1">
                  <Link href="#" className={`${styles['link-none']}`}>
                    <div className={`card ${styles['card-type']}`}>
                      <div className="card-body">
                        <img
                          src="/svgs/MEDICINE-pic.svg"
                          alt=""
                          className="ms-3"
                        />
                        <p className={`${styles['card-tit']}`}>MEDICINE</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col ms-1 mb-1">
                  <Link href="#" className={`${styles['link-none']}`}>
                    <div className={`card ${styles['card-type']}`}>
                      <div className="card-body">
                        <img
                          src="/svgs/blood-pic.svg"
                          alt=""
                          className="ms-4"
                        />
                        <p className={`${styles['card-tit']}`}>BLOOD BANK</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </Layout>
    </>
  );
};
export default Home;
