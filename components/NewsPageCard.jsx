import styles from './styles/NewsPage.module.css';
import Link from 'next/link';
function NewsPageCard() {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
      <div className={`card ${styles['news-card']}`}>
        <div className={`card-body`}>
          <h5 className={`card-title `}>
            Helping Seniors Learn New Hobbies
          </h5>
          <h6 className={`${styles['date-card']}`}>05 September 2022</h6>
          <p className={`${styles['card-text']}`}>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link
            href="/Home/SingleNew"
            className={`{${styles['card-btn']} btn rounded-pill text-white`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsPageCard;
