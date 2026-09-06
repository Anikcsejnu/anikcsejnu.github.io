import styles from './Hamburger.module.css';

export default function Hamburger({ open, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.hamburger} ${open ? styles.open : ''}`.trim()}
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={open}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
