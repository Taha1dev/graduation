import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/user/userDashboard.module.css';
import Image from 'next/image';
import Layout from '@/Layout/User/Layout';
import { stateContext } from '@/Context/ContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faUser, faCalendarAlt, faHeartbeat, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axiosClient from '@/lib/axiosClent';
const UserDashboard = () => {
  const { user, token, setUser, setToken } = useContext(stateContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosClient.get('/Patient/Dashbord', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = response.data;
        setUserData(data);
      } catch (error) {
        setUserData(null);
      }
    };

    fetchUserData();
  }, []);

  // ...


  return (
    <Layout>
      {/* Main content */}
      <div className={`${styles.container} container`}>
        {/* Main content */}
        <div className={styles.main}>
          <h2>Hello, {user}</h2>
          <p>How are you feeling today?</p>
        </div>

        {/* User data cards */}
        <div className={`row ${styles.cardContainer}`}>
          <div className={`col-lg-4 col-md-6 mb-4 ${styles.card}`}>
            <div className={styles.cardIconWrapper}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faBalanceScale} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>Your Data</h3>
              {userData && (
                <ul>
                  <li>
                    <span>Weight:</span> {userData.weight}
                  </li>
                  <li>
                    <span>Height:</span> {userData.height}
                  </li>
                  <li>
                    <span>Blood Type:</span> {userData.bloodType}
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 mb-4 ${styles.card}`}>
            <div className={styles.cardIconWrapper}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>Your Profile</h3>
              {userData && (
                <ul>
                  <li>
                    <span>Nationality:</span> {userData.nationality}
                  </li>
                  <li>
                    <span>ID:</span> {userData.idNumber}
                  </li>
                  <li>
                    <span>Gender:</span> {userData.gender}
                  </li>
                  <li>
                    <span>Date of Birth:</span> {userData.dateOfBirth}
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 mb-4 ${styles.card}`}>
            <div className={styles.cardIconWrapper}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>Your Appointments</h3>
              {userData && (
                <ul>
                  <li>
                    <span>Last Visit:</span> {userData.lastVisit}
                  </li>
                  <li>
                    <span>Next Visit:</span> {userData.nextVisit}
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 mb-4 ${styles.card}`}>
            <div className={styles.cardIconWrapper}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faHeartbeat} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>Your Health</h3>
              {userData && (
                <ul>
                  <li>
                    <span>Last Operation:</span> {userData.lastOperation}
                  </li>
                  <li>
                    <span>Next Operation:</span> {userData.nextOperation}
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 mb-4 ${styles.card}`}>
            <div className={styles.cardIconWrapper}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>Your Contact Information</h3>
              {userData && (
                <ul>
                  <li>
                    <span>Email:</span> {userData.email}
                  </li>
                  <li>
                    <span>Phone:</span> {userData.phone}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;