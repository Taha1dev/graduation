import { useContext, useEffect, useRef, useState } from 'react';
import NavNoBtn from '@/components/NavNoBtn';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/Login.module.css';
import axiosClient from '@/lib/axiosClent';
import { stateContext } from '@/Context/ContextProvider';
import { setToken } from '@/lib/auth';
const Login = () => {
  // Router Hook
  const router = useRouter();
  // Get Data From ContextAPI
  const { setUser, setContextToken } = useContext(stateContext);
  // Refs
  const emailRef = useRef();
  const passwordRef = useRef();

  // Handle Login Function
  const handleLogin = async (event) => {
    event.preventDefault();
  
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
  
    try {
      const response = await axiosClient.post('/login', payload);
      const { token, user } = response.data;
      setToken(token);
      setContextToken(token); // Set the token in the context provider
      setUser(user);
      router.push('/User');
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log('An error occurred while logging in.');
      }
    }
  };

  return (
    <>
      <NavNoBtn />
      <div
        className={`mask d-flex align-items-center h-100 ${styles['login-signup-form']}  ${styles.animated} ${styles.fadeInDown}`}
      >
        <div className="my-5 container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <center>
                    <Image
                      src="/imgs/Logo.png"
                      alt="logo"
                      width={190}
                      height={190}
                      className="p-2 mb-5"
                    />
                  </center>
                  <h2 className="text-capitalize text-center mb-3">
                    Login to Your Account
                  </h2>
                  <form onSubmit={handleLogin}>
                    <div className="form-outline">
                      <label htmlFor="email" className="form-label fs-5">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        ref={emailRef}
                        className={`form-control form-control-lg ${styles.inp}`}
                      />
                      <label className="form-label"></label>
                    </div>
                    <div className="form-outline mb-5">
                      <label htmlFor="password" className="form-label fs-5">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        ref={passwordRef}
                        className={`form-control form-control-lg ${styles.inp}`}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn bg-gradient text-white btn-lg"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Don't Havean Account?{' '}
                      <Link href="./Register" className="fw-bold text-body">
                        <u>Create Account</u>
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
export default Login;
