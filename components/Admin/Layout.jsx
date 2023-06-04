import Link from 'next/link';
import { useState } from 'react';
import styles from './Layout.module.css';
import NavBar from '@/components/NavBar';
import Nav from '@/components/Admin/Nav';
import MiniFooter from '@/components/MiniFooter';
import { useRouter } from 'next/router';
export default function Layout({ children }) {
  const router = useRouter();
  const [selectedLink, setSelectedLink] = useState(null);
  const onLogout = (e) => {
    e.preventDefault();
  };
  function handleLinkClick(link) {
    setSelectedLink(link);
  }
  function handleLinkClick(link, event) {
    event.preventDefault();
    setSelectedLink(link);
    router.push(link);
  }
  return (
    <>
      <Nav />
      <div className={`${styles.defaultLayout} defaultLayout`}>
        <aside>
          <Link
            href=""
            className={`
      ${selectedLink === 'dashboard' ? `${styles.selected}` : `${styles.lnk}`}
    `}
            onClick={(event) => handleLinkClick('/Admin', event)}
          >
            Dashboard
          </Link>
          <Link
            href=""
            className={`
      ${selectedLink === 'department' ? `${styles.selected}` : `${styles.lnk}`}
    `}
            onClick={(event) => handleLinkClick('/Admin/Departments', event)}
          >
            Department
          </Link>
          <Link
            href=""
            className={
              selectedLink === 'employees'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }
            onClick={(event) => handleLinkClick('/Admin/Employees', event)}
          >
            Employees
          </Link>
          <Link
            href=""
            className={
              selectedLink === 'patients'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }
            onClick={(event) => handleLinkClick('/Admin/Patients', event)}
          >
            Patients
          </Link>
          <Link
            href=""
            className={
              selectedLink === 'appointment'
                ? `${styles.selected}`
                : `${styles.lnk}`
            }
            onClick={(event) => handleLinkClick('/Admin/Appointment', event)}
          >
            Appointment
          </Link>
          <Link
            href=""
            className={
              selectedLink === 'users' ? `${styles.selected}` : `${styles.lnk}`
            }
            onClick={(event) => handleLinkClick('/Admin/Users', event)}
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
