import { faSearchPlus } from '@fortawesome/free-solid-svg-icons/faSearchPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Filter.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Filter = () => {
  return (
    <>
      <div className="mb-5 mt-5">
        <form action="" className="row justify-content-center my-auto">
          <div className={` col-lg-2 col-md-4 my-md-2 my-sm-2`}>
            <div className=" bg-transparent input-group">
              <div className="input-group-text bg-transparent">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="search"
              />
            </div>
          </div>
          <div className={` col-lg-2 col-md-4 my-md-2 my-sm-2`}>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Speciality</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </select>
          </div>
          <div className={` col-lg-2 col-md-4 my-md-2 my-sm-2`}>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Gender</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
            </select>
          </div>
          <div className={` col-lg-2 col-md-4 my-md-2 my-sm-2`}>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Language</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
            </select>
          </div>
          <button
            className={` ${styles.btn} ${styles['btn-yellw']} my-md-2 my-sm-2`}
          >
            search
          </button>
        </form>
      </div>
    </>
  );
};

export default Filter;
