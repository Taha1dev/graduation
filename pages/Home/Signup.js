import NavNoBtn from '@/components/NavNoBtn';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Login.module.css';

const Signup = () => {
  return (
    <>
      <NavNoBtn />
      <div
        className={`mask d-flex align-items-center h-100 ${styles['login-signup-form']}  ${styles.animated} ${styles.fadeInDown}`}
      >
        {' '}
        <div className="my-3 container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <center>
                    <Image
                      src="/imgs/Logo.png"
                      alt="logo"
                      width={150}
                      height={150}
                      className="p-2 mb-5"
                    />
                  </center>
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <form>
                    <div className="form-outline mb-3">
                      <label
                        htmlFor="nickname"
                        className="form-label fs-5 text-capitalize"
                      >
                        Nick name
                      </label>
                      <input
                        autoComplete='on' 
                        type="text"
                        id="nickname"
                        className={`form-control form-control-lg ${styles.inp}`}
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <label
                        htmlFor="firstname"
                        className="form-label fs-5 text-capitalize"
                      >
                        first Name
                      </label>
                      <input
                        autoComplete='on' 
                        type="text"
                        id="firstname"
                        className={`form-control form-control-lg ${styles.inp}`}
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <label
                        htmlFor="lastname"
                        className="form-label fs-5 text-capitalize"
                      >
                        last Name
                      </label>
                      <input
                        autoComplete='on' 
                        type="text"
                        id="lastname"
                        className={`form-control form-control-lg ${styles.inp}`}
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <label
                        htmlFor="email"
                        className="form-label fs-5 text-capitalize"
                      >
                        email
                      </label>
                      <input
                        autoComplete='on' 
                        type="email"
                        id="email"
                        className={`form-control form-control-lg ${styles.inp}`}
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <label
                        htmlFor="password"
                        className="form-label fs-5 text-capitalize"
                      >
                        password
                      </label>
                      <input
                        autoComplete='on' 
                        type="password"
                        id="password"
                        className={`form-control form-control-lg ${styles.inp}`}
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <label
                        htmlFor="repeatpassword"
                        className="form-label fs-5  text-capitalize"
                      >
                        Repeat your password
                      </label>
                      <input
                        autoComplete='on' 
                        type="password"
                        id="repeatpassword"
                        className={`form-control form-control-lg ${styles.inp}`}
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <label
                        htmlFor="phonenumber"
                        className="form-label fs-5 text-capitalize"
                      >
                        phone Number
                      </label>
                      <input
                        autoComplete='on' 
                        type="text"
                        id="phonenumber"
                        className={`form-control form-control-lg ${styles.inp}`}
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <label
                        htmlFor="country"
                        className="form-label fs-5 text-capitalize"
                      >
                        country
                      </label>
                      <select
                      autoComplete='on'
                        id="country"
                        className={`form-select form-select-lg `}
                        aria-label="Default select example"
                      >
                        <option selected value="Damascus">Damascus</option>
                        <option  value="Aleepo">Aleepo</option>
                        <option  value="Homs">Homs</option>
                        <option  value="hamah">hamah</option>
                        <option  value="Damascus">Damascus</option>
                        <option  value="Aleepo">Aleepo</option>
                        <option  value="Homs">Homs</option>
                        <option  value="hamah">hamah</option>
                      </select>
                    </div>

                    <div className="form-outline mb-3">
                      <label
                        htmlFor="city"
                        className="form-label fs-5 text-capitalize"
                      >
                        city
                      </label>
                      <input
                        autoComplete='on' 
                        type="text"
                        id="city"
                        className={`form-control form-control-lg ${styles.inp}`}
                      />
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        autoComplete='on' 
                        className="form-check-input me-2"
                        type="checkbox"
                        id="agreement"
                        value=""
                      />
                      <label htmlFor="agreement" className="form-check-label">
                        I agree all statements in{' '}
                        <Link href="#" className="text-body">
                          <u>Terms of service</u>
                        </Link>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn bg-gradient text-white btn-lg"
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      already have an account?{' '}
                      <Link href={'./Login'} className="fw-bold text-body">
                        <u>Login here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
