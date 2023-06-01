import NavNoBtn from '@/components/NavNoBtn';
import Image from 'next/image';
import Link from 'next/link';
const Login = () => {
  return (
    <>
      <NavNoBtn />
      <div className="mask d-flex align-items-center h-100 gradient-custom-4">
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
                      <label className="form-label" htmlFor="form3Example1cg">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example1cg"
                      ></label>
                    </div>
                    <div className="form-outline mb-5">
                      <label className="form-label" htmlFor="form3Example1cg">
                        Password
                      </label>
                      <input type="" className="form-control form-control-lg" />
                    </div>
                    <div className="d-flex justify-content-center ">
                      <button
                        type="button"
                        className="btn  bg-gradient text-white btn-lg"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Don't Have an Account?{' '}
                      <Link href="./Login" className="fw-bold text-body">
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
