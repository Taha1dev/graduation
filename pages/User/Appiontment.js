import Layout from '@/Layout/User/Layout';
import axiosClient from '@/lib/axiosClent';
import React from 'react';
import styles from '@/styles/user/App.module.css';
import { useRef } from 'react';
import BackButton from '@/components/Admin/BackButton';
const Appiontment = () => {
  const clinicRef = useRef();
  const doctorRef = useRef();
  const dateRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      Clinic: clinicRef.current.value,
      Doctor: doctorRef.current.value,
      AppointmentDate: dateRef.current.value,
    };

    try {
      await axiosClient.post('/PatientAppointment', payload);
      alert('success');
    } catch (error) {
      console.error(error);
      alert('error');
    }
  };

  return (
    <Layout>
      <BackButton/>
      <div className="container px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div className="card">
              <form className="form-card mt-4 p-3" onsubmit={handleSubmit}>
                <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex p-3 text-center">
  <select
    ref={clinicRef}
    className="form-select bg-light"
    aria-label="Default select example"
  >
    <option selected className="text-capitalize">
      Choose Clinic
    </option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
<div className="form-group col-sm-6 flex-column d-flex p-3 text-center">
  <select
    ref={doctorRef}
    className="form-select bg-light"
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
<div className="form-group col-sm-6 flex-column d-flex p-3 text-center">
  <input
    ref={dateRef}
    type="datetime-local"
    class="form-control form-control-lg rounded bg-light text-center"
  />
</div>
                </div>
                <div className="form-group col-sm-6 m-auto my-5">
                  <button
                    type="submit"
                    className="form-btn btn text-white px-5"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Appiontment;
