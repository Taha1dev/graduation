import React, { useContext, useState } from 'react'
import styles from '@/Layout/User/userLayout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MiniFooter from '@/components/MiniFooter'
import { stateContext } from '@/Context/ContextProvider'
import { setToken } from '@/lib/auth'
import axiosClient from '@/lib/axiosClent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTachometerAlt,
  faCalendarAlt,
  faBriefcase,
  faFlask,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Layout = ({ children }) => {
  const router = useRouter()

  function handleLinkClickWithEvent(link, event) {
    event.preventDefault()
    router.push(link)
  }

  const { setUser } = useContext(stateContext)

  const onLogout = async (ev) => {
    ev.preventDefault()
    // Remove token immediately
    await axiosClient.post('/logout')
    setToken(null)
    setContextToken(null)

    router.push('/Home/Login')
    // Redirect to login page
  }

  const asideLinks = [
    { label: 'Dashboard', link: '/User', icon: faTachometerAlt },
    { label: 'Appointments', link: '/User/Appiontment', icon: faCalendarAlt },
    { label: 'Operations', link: '/User/Operation', icon: faBriefcase },
    { label: 'Tests', link: '/User/Tests', icon: faFlask },
  ]

  return (
    <>
      <div className={styles.defaultLayout}>
        <aside className={styles.aside}>
          {asideLinks.map((link, index) => (
            <Link
              key={index}
              href=""
              className={``}
              onClick={(event) => handleLinkClickWithEvent(link.link, event)}
            >
              <FontAwesomeIcon icon={link.icon} className={styles.icon} />
              <span>{link.label}</span>
            </Link>
          ))}
        </aside>
        <div className={styles.content}>
          <header>
            <h1>Patient Panel</h1>
            <Link
              href=""
              onClick={onLogout}
              className={`${styles.btnLogout}  btn text-white`}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className={styles.logoutIcon}
              />
              Logout
            </Link>
          </header>
          <main>{children}</main>
        </div>
      </div>
      <MiniFooter />
    </>
  )
}

export default Layout
