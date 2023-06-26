import Link from 'next/link';
import React from 'react';
import styles from './DoctorCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faLanguage,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import axiosClient from '@/lib/axiosClent';

const DoctorCard = ({ doctor }) => {
  if (!doctor) {
    return null;
  }

  return (
    <div
      className={`col-lg-4 col-md-6 card ${styles['card-doc']} my-2`}
      key={doctor.Doctor_ID}
    >
      <div className="card-body">
        <div className="card-title d-flex mb-0">
          <div className={`${styles['pro-img']} me-2`}>
            <img
              src="/imgs/doc-img.png"
              className={`${styles['pro-img']}`}
              alt="pro-img"
            />
          </div>
          <div className={`${styles['doc-details']}`}>
            <h6 className={`${styles['doc-name']}`}>
              {doctor.Doctor_Name.FirstName} {doctor.Doctor_Name.LastName}
            </h6>
            <span className={`${styles['doc-spe']}`}>
              Doctor Certification
              {
                doctor['Doctor_Speciality_And_Donor_Name'][
                  'Donor_Certifications'
                ]
              }
              {
                doctor['Doctor_Speciality_And_Donor_Name'][
                  'Name_Certifications'
                ]
              }
            </span>
            <br />
            <span className={`${styles['doc-exp']}`}>
              <i className="fa-duotone fa-stethoscope"></i>
              {doctor.Doctor_Experience} years Experience
            </span>
            <br />
            <span className={`${styles['doc-exp']}`}>
              <FontAwesomeIcon icon={faLanguage} style={{ color: '#c7c7c7' }} />{' '}
              {doctor?.doctorCity ?? 'Mumbai'},{' '}
              {doctor?.doctorCountry ?? 'India'}
            </span>
          </div>
        </div>
        <hr className={`${styles['line-card']}`} />
        <ul>
          {doctor?.doctorWorkSchedule?.map((schedule) => (
            <li key={schedule.dayName} className={`${styles['doc-exp']} mt-3`}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ color: '#aeaeae' }}
                size="lg"
              />
              {schedule.dayName}: {schedule.fromHour} - {schedule.toHour}
            </li>
          ))}
        </ul>
        <p className={`${styles['doc-exp']} mt-3`}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ color: '#aeaeae' }}
            size="lg"
          />
          {doctor?.doctorCity ?? 'Mumbai'}, {doctor?.doctorCountry ?? 'India'}
        </p>
        <p className={`${styles['doc-exp']}`}>
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ color: '#aeaeae' }}
          />
          {doctor?.doctorEducation ?? 'MBBS, MD'}
        </p>
        <Link href="#" className={`${styles.btn} ${styles['btn-appointment']}`}>
          Card link
        </Link>
        <Link href="#" className={`${styles.btn} ${styles['btn-profile']}`}>
          Another link
        </Link>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await axiosClient.get('/Doctor');
  const data = response.data.data;
  const doctor = data[0] || null; // fetch the first doctor in the response

  return {
    props: {
      doctor,
    },
    revalidate: 60, // cache revalidation time in seconds
  };
}

export default DoctorCard;
