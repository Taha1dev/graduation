import React from 'react';
import styles from './Bread.module.css';
import Link from 'next/link';
function BreadCrumb(props) {
  const BreadCrumbStyle = {
    '--bs-breadcrumb-divider':
      'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="%236c757d"/%3E%3C/svg%3E)',
  };
  return (
    <>
      <div className={`d-flex ${styles.bread} p-3 ps-5 breadcrumb`}>
        <a href="/" className='breadcrumb-item' style={BreadCrumbStyle}>
          Home
        </a>
        <span
          className={`breadcrumb-item active ${styles['breadcrumb-link']}`}
          style={{ textAlign: 'center', ...BreadCrumbStyle }}
        >
          {props.name}
        </span>
      </div>
    </>
  );
}

export default BreadCrumb;
