import Link from 'next/link';
import React from 'react';
import styles from './DoctorCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faLanguage,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
const DoctorCard = () => {
  return (
    <div className={`col-lg-4 col-md-6 card ${styles['card-doc']} my-2`}>
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
            <h6 className={`${styles['doc-name']}`}>Doctor Name</h6>
            <span className={`${styles['doc-spe']}`}> Doctor Speciality</span>
            <br />
            <span className={`${styles['doc-exp']}`}>
              <i className="fa-duotone fa-stethoscope"></i>
              08 years Experience
            </span>
            <br />
            <span className={`${styles['doc-exp']}`}>
              <FontAwesomeIcon icon={faLanguage} style={{ color: '#c7c7c7' }} />{' '}
              Arabic , Syria
            </span>
          </div>
        </div>
        <hr className={`${styles['line-card']}`} />
        <p className={`${styles['doc-exp']} mt-3`}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ color: '#aeaeae' }}
            size="lg"
          />
          Saifee Hospital, Mumbai India
        </p>
        <p className={`${styles['doc-exp']}`}>
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ color: '#aeaeae' }}
          />
          MBBS, MD
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

export default DoctorCard;
