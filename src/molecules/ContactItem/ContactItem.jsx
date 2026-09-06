import styles from './ContactItem.module.css';

export default function ContactItem({ label, value, url }) {
  const external = url.startsWith('http');
  return (
    <a
      href={url}
      className={styles.item}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>
        {value} <span className={styles.arrow}>↗</span>
      </span>
    </a>
  );
}
