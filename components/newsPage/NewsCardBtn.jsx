import { useState } from 'react';
import styles from './NewsCardBtn.module.css';

function NewsCardBtn(props) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(true);
  }
  return (
    <button
      type="button"
      className={`${styles.btn} btn-primary m-1 p-2 ${
        isActive ? styles['button-group-active'] : ''
      }`}
      onClick={handleClick}
    >
      {props.value}
    </button>
  );
}

export default NewsCardBtn;
