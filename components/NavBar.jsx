import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/NavBar.module.css'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { stateContext } from '@/Context/ContextProvider'
const NavBar = () => {
  const { token } = useContext(stateContext)
  const router = useRouter()
  const handleProfileClick = () => {
    if (typeof window !== 'undefined') {
      router.push('/User/')
    }
  }
  const links = [
    { text: 'Home', href: '/' },
    { text: 'News', href: '/Home/News' },
    { text: 'Appointment', href: '/Home/Appointment' },
    { text: 'Events', href: '/Home/Events' },
    { text: 'Departments', href: '/Home/Departments' },
    { text: 'Doctors', href: '/Home/Doctors' },
  ]
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
          <>
            {token ? (
              // Render the profile icon if token exists
              <div className="col-lg-4 col-md-8 col-sm-8 d-flex justify-content-end">
                <div
                  className={styles.profileIcon}
                  onClick={handleProfileClick}
                >
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </div>
              </div>
            ) : (
              // Render the login/signup buttons if token does not exist
              <div className="col-lg-4 col-md-8 col-sm-8 d-flex justify-content-end">
                <Link
                  href={'/Home/Login'}
                  className={`${styles.btn} ${styles.log} text-light rounded-pill px-4 me-2 d-flex align-items-center justify-content-center`}
                >
                  Login
                </Link>

                <Link
                  href={'/Home/Register'}
                  className={`${styles.btn} ${styles.log} text-light rounded-pill px-4  d-flex align-items-center justify-content-center`}
                >
                  Signup
                </Link>
              </div>
            )}
          </>
        </div>
      </div>
      <nav className={`${styles.navbar} navbar-expand-lg mt-2`}>
        <button
          style={{ zIndex: '999999' }}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navshow"
          aria-controls="navshow"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navshow" className="collapse navbar-collapse">
          <ul className={`${styles['navbar-nav']} navbar-nav mx-auto`}>
            {links.map((link, index) => (
              <li key={index} className="nav-item p-2 px-lg-3">
                <Link
                  className={`${styles['nav-link']} nav-item`}
                  href={link.href}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
