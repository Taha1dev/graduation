const { default: Image } = require('next/image');
const { default: Link } = require('next/link');
import BannerImg from './BannerImg';
import styles from './styles/NavBar.module.css';
function NavBar() {
  return (
    <>
      <div className="container mt-2">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="d-flex align-items-center">
              <Image
                width={60}
                height={60}
                className="logo-img me-2"
                src="/imgs/smallLogo.png"
                alt=""
              />
              <p className={`${styles['l-title']} mb-0`}>
                <b>HIMS</b> © We Live once
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-sm-8 d-flex justify-content-end">
            <div
              className={`${styles.btn} ${styles.log} text-light rounded-pill px-4 me-2 d-flex align-items-center justify-content-center`}
            >
              Login
            </div>
            <div
              className={`${styles.btn} ${styles.log} text-light rounded-pill px-4  d-flex align-items-center justify-content-center`}
            >
              Signup
            </div>
          </div>
        </div>
      </div>
      <nav className={`${styles.navbar} navbar-expand-lg mt-2`}>
        <Link href="#navshow" data-toggle="collapse" className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </Link>
        <div id="navshow" className="collapse navbar-collapse">
          <ul className={`${styles['navbar-nav']} navbar-nav mx-auto`}>
            <li className="nav-item p-2 px-lg-3 active">
              <Link className={`${styles['nav-link']}`} href="/">
                Home
              </Link>
            </li>
            <li className="nav-item p-2 px-lg-3 ">
              <Link className={`${styles['nav-link']}`} href="/Home/News">
                News
              </Link>
            </li>
            <li className="nav-item p-2 px-lg-3 ">
              <Link
                className={`${styles['nav-link']}`}
                href="/Home/Appointment"
              >
                Appointment
              </Link>
            </li>
            <li className="nav-item p-2 px-lg-3 ">
              <Link className={`${styles['nav-link']}`} href="/Home/Events">
                Events
              </Link>
            </li>
            <li className="nav-item p-2 px-lg-3 ">
              <Link
                className={`${styles['nav-link']}`}
                href="/Home/Departments"
              >
                Departments
              </Link>
            </li>
            <li className="nav-item p-2 px-lg-3 ">
              <Link className={`${styles['nav-link']}`} href="/Home/Doctors">
                Doctors
              </Link>
            </li>
            <li className="nav-item p-2 px-lg-3 ">
              <Link className={`${styles['nav-link']}`} href="/Home/Contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
