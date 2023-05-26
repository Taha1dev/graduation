import React from 'react';
import styles from './Bread.module.css';
import Link from 'next/link';
function BreadCrumbMulti(props) {
  return (
    <>
      <div className={`d-flex ${styles.bread} p-3 ps-5 breadcrumb`}>
        <a href="/" className="breadcrumb-item">
          Home
        </a>
        <a href="/" className="breadcrumb-item">
          {props.parent}
        </a>
        <span
          className={`breadcrumb-item active ${styles['breadcrumb-link']}`}
          style={{ textAlign: 'center' }}
        >
          {props.name}
        </span>
      </div>
    </>
  );
}

export default BreadCrumbMulti;
