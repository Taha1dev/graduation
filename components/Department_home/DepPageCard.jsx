import Link from 'next/link';
import styles from './DepPage.module.css';

const DepPageCard = (props) => {
  return (
    <div className={`card col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center${styles['card-dep']} p-1`}>
      <div className="card-body">
        <div className="card-title d-flex  ">
          <div className={`${styles['pro-img']} me-2`}>
            <img
              src={props.src}
              className={`${styles['pro-img']}`}
              alt="pro-img"
            />
          </div>
          <div className={`${styles['dep-details']}`}>
            <h5 className={`${styles['dep-name']}`}>Department Name</h5>
            <p className={`${styles['dep-inf']}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              itaque est perspiciatis saepe voluptatum illo.
            </p>
          </div>
        </div>
        <Link href="#" className={`{${styles['card-btn']} btn  text-white`}>
          Get Appointment
        </Link>
      </div>
    </div>
  );
};

export default DepPageCard;
