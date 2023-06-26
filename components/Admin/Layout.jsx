import Link from 'next/link'
import { useState } from 'react'
import styles from './Layout.module.css'
import NavBar from '@/components/NavBar'
import Nav from '@/components/Admin/Nav'
import MiniFooter from '@/components/MiniFooter'
import { useRouter } from 'next/router'
import axiosClient from '@/lib/axiosClent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTachometerAlt,
  faBuilding,
  faUsers,
  faUserInjured,
  faCalendarAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

export default function Layout({ children }) {
  const router = useRouter()
  const [selectedLink, setSelectedLink] = useState(null)
  const onLogout = async (ev) => {
    ev.preventDefault()
    // Remove token immediately
    await axiosClient.post('/logout')
    setToken(null)
    setUser(null)
    router.push('/Home/Login')
    // Redirect to login page
  }
  function handleLinkClick(link) {
    setSelectedLink(link)
  }
  function handleLinkClick(link, event) {
    event.preventDefault()
    setSelectedLink(link)
    router.push(link)
  }
  return (
    <>
      <Nav />
      <div className={`${styles.defaultLayout} defaultLayout`}>
        <aside>
          <Link
            href="/Admin/"
            className={`${
              selectedLink === 'dashboard'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }`}
            onClick={(event) => handleLinkClick('/Admin', event)}
          >
            <FontAwesomeIcon
              icon={faTachometerAlt}
              className={`${styles['fa-icon']}`}
            />
            <span>Dashboard</span>
          </Link>
          <Link
            href=""
            className={`${
              selectedLink === 'department'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }`}
            onClick={(event) => handleLinkClick('/Admin/Departments', event)}
          >
            <FontAwesomeIcon
              icon={faBuilding}
              className={`${styles['fa-icon']}`}
            />
            <span>Department</span>
          </Link>
          <Link
            href=""
            className={`${
              selectedLink === 'employees'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }`}
            onClick={(event) => handleLinkClick('/Admin/Employees', event)}
          >
            <FontAwesomeIcon
              icon={faUsers}
              className={`${styles['fa-icon']}`}
            />
            <span>Employees</span>
          </Link>
          <Link
            href=""
            className={`${
              selectedLink === 'patients'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }`}
            onClick={(event) => handleLinkClick('/Admin/Patients', event)}
          >
            <FontAwesomeIcon
              icon={faUserInjured}
              className={`${styles['fa-icon']}`}
            />
            <span>Patients</span>
          </Link>
          <Link
            href=""
            className={`${
              selectedLink === 'appointment'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }`}
            onClick={(event) => handleLinkClick('/Admin/Appointment', event)}
          >
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className={`${styles['fa-icon']}`}
            />
            <span>Appointment</span>
          </Link>
          <Link
            href=""
            className={`${
              selectedLink === 'users' ? `${styles.selected}` : `${styles.lnk}`
            }`}
            onClick={(event) => handleLinkClick('/Admin/Users', event)}
          >
            <FontAwesomeIcon icon={faUser} className={`${styles['fa-icon']}`} />
            <span>Users</span>
          </Link>
        </aside>
        <div className={`${styles.content}`}>
          <header>
            <div>Admin Panel</div>
            <div>
              user -info
              <Link
                href={''}
                onClick={onLogout}
                className={`${styles['btn-logout']}`}
              >
                Logout
              </Link>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </div>
      <MiniFooter />
    </>
  )
}
