import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import Joi from 'joi';
import styles from '@/styles/Login.module.css';
import axiosClient from '@/lib/axiosClent';
import { stateContext } from '@/Context/ContextProvider';
import NavNoBtn from '@/components/NavNoBtn';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { setToken } from '@/lib/auth';
import MiniFooter from '@/components/MiniFooter';
const Register = () => {
  const router = useRouter();

  const [errors, setErrors] = useState({});
  const nicknameRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const { setToken, setUser } = useContext(stateContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setToken(null);
    try {
      const formData = new FormData();
      formData.append('PhoneNumber', phoneNumberRef.current.value);
      formData.append('password', passwordRef.current.value);
      formData.append('email', emailRef.current.value);
      formData.append('LastName', lastNameRef.current.value);
      formData.append('FirstName', firstNameRef.current.value);
      formData.append('NickName', nicknameRef.current.value);
  
      const response = await axiosClient.post('/register', formData);
  
      // Set the token using the setToken function from auth.js
      setToken(response.data.token);
  
      setUser(response.data.user);
      router.push('/User/');
    } catch (error) {
      const response = error.response;
      if (response && response.status === 422) {
        const validationErrors = response.data.errors;
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          html: Object.values(validationErrors)
            .map((error) => `<p>${error[0]}</p>`)
            .join(''),
        });
        setErrors(validationErrors);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <NavNoBtn />
      <div
        className={`mask d-flex align-items-center h-100 ${styles['login-signup-form']}  ${styles.animated} ${styles.fadeInDown}`}
      >
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

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="NickName">Nickname</label>
                      <input
                        autoComplete="on"
                        type="text"
                        id="NickName"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={nicknameRef}
                      />
                      {/* {errors.NickName && (
                        <span className="text-danger">{errors.NickName}</span>
                      )} */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="FirstName">First Name</label>
                      <input
                        autoComplete="on"
                        type="text"
                        id="FirstName"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={firstNameRef}
                      />
                      {/* {errors.FirstName && (
                        <span className="text-danger">{errors.FirstName}</span>
                      )} */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="LastName">Last Name</label>
                      <input
                        autoComplete="on"
                        type="text"
                        id="LastName"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={lastNameRef}
                      />
                      {/* {errors.LastName && (
                        <span className="text-danger">{errors.LastName}</span>
                      )} */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        autoComplete="on"
                        type="email"
                        id="email"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={emailRef}
                      />
                      {/* {errors.email && (
                        <span className="text-danger">{errors.email}</span>
                      )} */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        autoComplete="off"
                        type="password"
                        id="password"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={passwordRef}
                      />
                      {/* {errors.password && (
                        <span className="text-danger">{errors.password}</span>
                      )} */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="repeatPassword">Repeat Password</label>
                      <input
                        autoComplete="off"
                        type="password"
                        id="repeatPassword"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={repeatPasswordRef}
                      />
                      {/* {errors.repeatPassword && (
                        <span className="text-danger">
                          {errors.repeatPassword}
                        </span>
                      )} */}
                    </div>
                    <div className="form-group">
                      <label htmlFor="PhoneNumber">Phone Number</label>
                      <input
                        autoComplete="on"
                        type="tel"
                        id="PhoneNumber"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={phoneNumberRef}
                      />
                      {errors.PhoneM && (
                        <span className="text-danger">{errors.PhoneM}</span>
                      )}
                    </div>
                    <div className="mt-4 form-group d-flex justify-content-center">
                      <button type="submit" className="btn text-white btn-lg">
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
      <MiniFooter />
    </>
  );
};

export default Register;
