import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Admin/Home.module.css';
import NavBar from '@/components/NavBar';
import Nav from '@/components/Admin/Nav';
import MiniFooter from '@/components/MiniFooter';
export default function Home({ children }) {
  const onLogout = (e) => {
    e.preventDefault();
  };
  const [selectedLink, setSelectedLink] = useState(null);

  function handleLinkClick(link) {
    setSelectedLink(link);
  }
  return (
    <>
      <Nav />
      <div className={`${styles.defaultLayout} defaultLayout`}>
        <aside>
          <Link
            href={''}
            className={
              selectedLink === 'dashboard'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }
            to="/dashboard"
            onClick={() => handleLinkClick('dashboard')}
          >
            Dashboard
          </Link>
          <Link
            href={''}
            className={`
              ${selectedLink} === 'department'
                ? ${styles.selected}
                : ${styles.lnk}
            `}
            to="/department"
            onClick={() => handleLinkClick('department')}
          >
            Department
          </Link>
          <Link
            href={''}
            className={
              selectedLink === 'employees'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }
            to="/employees"
            onClick={() => handleLinkClick('employees')}
          >
            Employees
          </Link>
          <Link
            href={''}
            className={
              selectedLink === 'patients'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }
            to="/patients"
            onClick={() => handleLinkClick('patients')}
          >
            Patients
          </Link>
          <Link
            href={''}
            className={
              selectedLink === 'appointment'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }
            to="/appointment"
            onClick={() => handleLinkClick('appointment')}
          >
            Appointment
          </Link>
          <Link
            href={''}
            className={
              selectedLink === 'users' ? `${styles.selected}` : `${styles.lnk}`
            }
            to="/users"
            onClick={() => handleLinkClick('users')}
          >
            Users
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
  );
}
