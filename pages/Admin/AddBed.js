import BackButton from '@/components/Admin/BackButton';
import Layout from '@/components/Admin/Layout';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';

const AddBed = () => {
  return (
    <Layout>
      <BackButton />
      <div className="container px-1 py-5 mx-auto m-5">
        <div className="row justify-content-center">
          <div className="col-xl col-lg col-md text-center">
            <div className="card">
              <h2 className="card-header">Add Bed</h2>
              <form className="form-card mt-4 p-3">
                <div className="row justify-content-between text-left">
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex p-3">
                      <input
                        type="text"
                        className="form-control input-style"
                        placeholder="patient ID"
                        aria-label="patient ID"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex p-3">
                      <input
                        type="date"
                        placeholder="Select a date"
                        className="form-control input-style"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group col-sm-6 m-auto my-5">
                  <button
                    type="submit"
                    className="btn text-white form-btn text-capitalize px-5 te"
                  >
                    add
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

export default AddBed;
