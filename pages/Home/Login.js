import { useRef, useState } from 'react';
import NavNoBtn from '@/components/NavNoBtn';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import swal from 'sweetalert';
import Joi from 'joi';
import { useRouter } from 'next/router';
import styles from '@/styles/Login.module.css';
const Login = () => {
  //Router
  const router = useRouter();
  //end Router

  // use States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // end Use States
  
  // Refs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const formData = {
    email: emailRef.current.value,
    password: passwordRef.current.value, 
  };
  // end Refs

  // on Submit Function
  const handleLogin = async () => {
    try {
      // Validate form data
      const schema = Joi.object({
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required(),
        password: Joi.string()
          .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
          .required(),
      });
      const { error } = schema.validate(formData, { abortEarly: false });
      if (error) {
        swal({
          title: 'Error',
          text: 'There was an error with your form data. Please check your inputs and try again.',
          icon: 'error',
        });
        // setErrors({
        //   ...error,
        //   email: error.details[0].message,
        // });
        return;
      } else {
        const response = await axiosClient
          .post('/login', formData)
          .then(({ data }) => {
            const token = response.data.token;
            const headers = {
              Authorization: `Bearer ${token}`,
            };
            const postData = {};
            const postResponse = axiosClie.post(
              'https://api.example.com/post',
              postData,
              { headers }
            );
            console.log(postResponse.data);
            // Navigate to new page
            router.push('/Admin/'); // replace "/dashboard" with the URL of the page you want to navigate to
          });
        }
      } catch (error) {
        console.error(error);
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
                  <form>
                    <div className="form-outline">
                      <label htmlFor="email" className="form-label fs-5">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        ref={emailRef}
                        className={`form-control form-control-lg ${styles.inp}`}
                        // value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        // value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn bg-gradient text-white btn-lg"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Don't Havean Account?{' '}
                      <Link href="./Signup" className="fw-bold text-body">
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
