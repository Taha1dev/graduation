import Image from 'next/image';
import styles from './styles/HomeCard.module.css'
function HomeCard() {
  return (
    <div className={`col-lg-4 col-md-6 card ${styles['card-fr']} my-3 mx-2`} style={{ width: '20rem' }}>
      <div className="card-body">
        <h5 className="card-title">
          <Image
            width={46}
            height={46}
            className="img-card m-2"
            src="/imgs/Vector.png"
            alt=""
          />
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default HomeCard;
