import React from 'react';
import styles from  './styles/AppintmentupMiniFooter.module.css'
const AppointmentUpMiniFooter = () => {
  return (
    <div
      className={` ${styles['Appointment-back']} mt-5 position-relative p-5`}
    >
      <div className="">
        <div className={`col-lg-5 ${styles['doc-pic']}`}>
          <img src="/imgs/doc-pic.png" alt="" />
        </div>
        <div className={`container col-lg-7 ${styles.cap}`}>
          <h3 className={`${styles['Appointment-cap']}`}>
            Looking for professinal & trusted <br />
            medical healthcare?
            <br />
            <span className="mt-2" style={{ color: '#fff' }}>
              Dont Hasitate To Contact Us.
            </span>
          </h3>
          <div
            className={`${styles.btn} rounded-pill ${styles['Appointment-btn']}`}
          >
            Make Appointment
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentUpMiniFooter;
