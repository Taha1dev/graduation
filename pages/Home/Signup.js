import NavNoBtn from '@/components/NavNoBtn';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Signup = () => {
  return (
    <>
    <NavNoBtn/>
    <div className="mask d-flex align-items-center h-100 gradient-custom-4">
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
                    <label className="form-label text-capitalize" htmlFor="form3Example1cg">
                      Nick name
                    </label>
                    <input
                      type="text"
                      className="form-control "
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label text-capitalize" htmlFor="form3Example1cg">
                      first Name
                    </label>
                    <input
                      type="text"
                      className="form-control "
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label text-capitalize" htmlFor="form3Example1cg">
                      last Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label text-capitalize" htmlFor="form3Example4cg">
                      email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label text-capitalize" htmlFor="form3Example4cdg">
                      password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label text-capitalize" htmlFor="form3Example4cdg">
                      Repeat your password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label text-capitalize" htmlFor="form3Example1cg">
                      phone Number
                    </label>
                    <input type="" className="form-control form-control-lg" />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label text-capitalize" htmlFor="form3Example1cg">
                      country
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                    />
                  </div>
                
                  <div className="form-outline mb-3">
                    <label className="form-label text-capitalize" htmlFor="form3Example3cg">
                      city
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example3g"
                    >
                      I agree all statements in{' '}
                      <a href="#" className="text-body">
                        <u>Terms of service</u>
                      </a>
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
                    <Link href={'./Signup'} className="fw-bold text-body">
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
