import Image from 'next/image';
import styles from'./styles/ShrinkCard.module.css';
function ShrinkCard() {
  return (
    <div className="position-relative">
      <Image
        width={300}
        height={140}
        className={`${styles['doc-img']}`}
        src="/imgs/doctors.png"
        alt=""
      />
      <div className={`${styles['img-sec']} position-absolute`}>
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          quod!
        </p>
        <button className="btn btn-danger">313</button>
      </div>
    </div>
  );
}

export default ShrinkCard;
