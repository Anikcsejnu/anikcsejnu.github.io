import styles from './SkillChip.module.css';

export default function SkillChip({ name, level }) {
  return <span className={`${styles.chip} ${styles[level]}`}>{name}</span>;
}
