import { useState } from 'react';
import NavNoBtn from '@/components/NavNoBtn';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Joi from 'joi';
import { useRouter } from 'next/router';
import styles from '@/styles/Login.module.css';
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      // validate email and password
      const schema = Joi.object({
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required(),
        password: Joi.string().min(6).max(30).required(),
      });
      const { error } = schema.validate({ email, password });
      if (error) {
        setErrors({
          ...error,
          email: error.details[0].message,
        });
        return;
      }
      // send login request to server
      const response = await axios.post('https://api.example.com/login', {
        email,
        password,
      });
      // handle successful response
      const token = response.data.token;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const postData = {};
      const postResponse = await axios.post(
        'https://api.example.com/post',
        postData,
        { headers }
      );
      console.log(postResponse.data);
      // navigate to the new page
      router.push('/Admin/index.js'); // replace "/dashboard" with the URL of the page you want to navigate to
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
                        className={`form-control form-control-lg ${styles.inp}`}
                        value={email}
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
                        className={`form-control form-control-lg ${styles.inp}`}
                        value={password}
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
