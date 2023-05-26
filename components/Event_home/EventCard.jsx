import styles from './EventCard.module.css';
import Link from 'next/link';
const EventCard = (props) => {
  return (
    <>

      <div
        className={`card col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center ${styles['event_card']} p-1`}
      >
        <img src={props.src} className='card-img-top w-100' alt="..." />
        <div className="card-body">
          <h5 className={`${styles['card-title']}`}>Card title</h5>
          <p className={`${styles['card-text']}`}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            href="#"
            className={`btn rounded-pill ${styles.card_btn} btn-outline-primary text-uppercase`}
          >
            come soon
          </button>
        </div>
      </div>
    </>
  );
};

export default EventCard;
