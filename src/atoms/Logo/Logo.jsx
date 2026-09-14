import styles from './Logo.module.css';

export default function Logo() {
  return (
    <a href="#home" className={styles.logo}>
      <img src="/assets/logos/mar-logo.png" alt="MAR." className={styles.mark} />
    </a>
  );
}
