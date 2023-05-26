const { default: Image } = require('next/image');
import Link from 'next/link';
import styles from './styles/Footer.module.css';
function Footer() {
  return (
    <>
      <div
        className={`${styles['footer']} py-5 text-white-50 text-center text-md-start mt-5`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 ">
              <div className="info">
                <Image
                  width={84}
                  height={81}
                  src="/imgs/smallLogo.png"
                  alt=""
                  className={`${styles['footer-img']}`}
                />
                <p className={`${styles['footer-p']}`} style={{ color :'#fff'}}>
                  Leading the Way in Medical <br />
                  Execellence, Trusted Care.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className={`${styles['links']}`}>
                <h5 className="text-light">Important Links</h5>
                <ul className="list-unstyled">
                  <li className={`${styles['footer-p']}`}>
                    <Link className={`${styles.linkStyle}`}href={'/Appointment'}>Appointment</Link>
                  </li>
                  <li className={`${styles['footer-p']}`}>
                    <Link className={`${styles.linkStyle}`}href={'/Appointment'}>Doctors</Link>
                  </li>
                  <li className={`${styles['footer-p']}`}>
                    <Link className={`${styles.linkStyle}`}href={'/Departments'}>Departments</Link>
                  </li>
                  <li className={`${styles['footer-p']}`}>
                    <Link className={`${styles.linkStyle}`}href={'/'}>About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className={`${styles['links']}`}>
                <h5 className="text-light">Contact Us</h5>
                <ul className="list-unstyled">
                  <li className={`${styles['footer-p']}`}>Call:+681-812-255</li>
                  <li className={`${styles['footer-p']}`}>
                    Email:name@gmail.com
                  </li>
                  <li className={`${styles['footer-p']}`}>
                    Address:Some place
                  </li>
                  <li className={`${styles['footer-p']}`}>Damascus, Syria</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4  ">
              <h5 className="text-light">Subscribe our Newsletter</h5>
              <p className="">
                Provide a reminder to send you the latest health News
              </p>
              <form action="">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control rounded-pill py-2 px-4 "
                    placeholder="Enter Your Email"
                    aria-label="Enter Your Email"
                    aria-describedby="submit-button"
                  />
                  <button
                    type="submit"
                    className={`${styles['submit-red']} ${styles['op']} text-light rounded-pill px-4 `}
                    id="submit-button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr className="footer-line mt-5 align-items-center l" />
          <p className={`${styles['footer-p']}`} style={{ color: '#fff' }}>
            {new Date().getFullYear()} ©<b>HIMS</b> Hospital Rights Reserved.
            Terms of Use | Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
