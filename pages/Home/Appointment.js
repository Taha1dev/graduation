import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Layout from '@/components/_Layout';
import axiosClient from '@/lib/axiosClent';
function Appointment() {
  

  const marginBottom = {
    marginBottom: '229px',
  };
  return (
    <Layout>
      <div>
        <BreadCrumb name={'Appointment'} />
        <div style={marginBottom} className="container px-1 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <div className="card ">
                <form
                  className="form-card mt-4 p-3"
                  onsubmit="event.preventDefault()"
                >
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex p-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected className="text-capitalize">
                          choose department
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex p-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected className="text-capitalize">
                          Choose Doctor
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="row justify-content-between text-left ">
                    <div className="form-group col-sm-6 flex-column d-flex p-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="first name"
                        aria-label="firs name"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex p-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="last name"
                        aria-label="last name"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="row justify-content-between text-left mb-5">
                    <div className="form-group col-sm-6 flex-column d-flex p-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex p-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="form-group col-sm-6 m-auto my-5 ">
                    {' '}
                    <button
                      style={{ letterSpacing: '1px' }}
                      type="submit"
                      className="btn bg-gradient fw-bold text-capitalize text-white btn-lg  px-5"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Appointment;
