import React from 'react';
import styles from '../Admin/Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Nav = () => {
  return (
    <nav className={`navbar navbar-expand-sm navbar-dark `}>
      <div className="container-fluid ms-5">
        <Image width={65} height={65} wid src="/imgs/smallLogo.png" alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto"></ul>
          <div className="d-flex">
            <ul className={`${styles['navbar-nav']} navbar-nav mx-auto`}>
              <li className="nav-item p-2 px-lg-3">
                <h4 className="me-2 text-white">Admin Panel</h4>
              </li>
              <li className="nav-item p-2 px-lg-3">
                {' '}
                <Link className={`${styles['nav-link']} me-2 text-white`} href="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
