import React, { useRef } from 'react';
import Joi from 'joi';
import styles from '@/styles/Login.module.css';
import axiosClient from '@/lib/axiosClent';
import { stateContext } from '@/Context/ContextProvider';
import NavNoBtn from '@/components/NavNoBtn';
import Image from 'next/image';
import Link from 'next/link';

const Signup = () => {
  const nicknameRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const countryRef = useRef(null);
  const cityRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const schema = Joi.object({
      nickname: Joi.string().min(3).max(30).required(),
      firstName: Joi.string().min(3).max(30).required(),
      lastName: Joi.string().min(3).max(30).required(),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
      repeatPassword: Joi.any().valid(Joi.ref('password')).required(),
      phoneNumber: Joi.string().min(9).max(15).required(),
      country: Joi.string().required(),
      city: Joi.string().required(),
    });

    const { setUser, settoken } = stateContext();

    const formData = {
      nickname: nicknameRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      repeatPassword: repeatPasswordRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      country: countryRef.current.value,
      city: cityRef.current.value,
    };

    const { error } = schema.validate(formData, { abortEarly: false });

    if (error) {
      // Handle validation errors here
      console.log(error.details);
    } else {
      axiosClient
        .post('/signup', formData)
        .then(({ data }) => {
          // Handle successful response here
          setUser(data.user);
          settoken(data.token);
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error response here
          const response = error.response;
          if (response && response.status === 422) {
            console.log(response.data.errors);
          }
        });
    }
  };
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
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="nickname">Nickname</label>
                      <input
                        autoComplete="on"
                        type="text"
                        id="nickname"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={nicknameRef}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        autoComplete="on"
                        type="text"
                        id="firstName"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={firstNameRef}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        autoComplete="on"
                        type="text"
                        id="lastName"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={lastNameRef}
                      />
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
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        autoComplete="on"
                        type="tel"
                        id="phoneNumber"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={phoneNumberRef}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <input
                        autoComplete="on"
                        type="text"
                        id="country"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={countryRef}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                        autoComplete="on"
                        type="text"
                        id="city"
                        className={`form-control form-control-lg ${styles.inp}`}
                        ref={cityRef}
                      />
                      <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        autoComplete="on"
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
