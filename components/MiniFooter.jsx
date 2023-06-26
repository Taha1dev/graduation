import styles from './styles/MiniFooter.module.css';
function MiniFooter() {
  return (
    <footer className={`${styles.foot}`}>
      <p className={`${styles['foot-p']}`}>
        {new Date().getFullYear()}{' '}
        <strong style={{ color: '#ED221C' }}>HIMS</strong> Hospital Rights
        Reserved. Terms of Use | Privacy Policy
      </p>
    </footer>
  );
}

export default MiniFooter;
