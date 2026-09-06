import styles from './StatItem.module.css';

export default function StatItem({ number, label }) {
  return (
    <div className={styles.stat}>
      <span className={styles.number}>{number}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
