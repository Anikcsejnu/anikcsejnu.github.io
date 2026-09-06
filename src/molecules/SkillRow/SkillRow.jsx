import SkillChip from '../../atoms/SkillChip/SkillChip';
import styles from './SkillRow.module.css';

export default function SkillRow({ category, items }) {
  return (
    <div className={styles.row}>
      <span className={styles.category}>{category}</span>
      <div className={styles.items}>
        {items.map((item) => (
          <SkillChip key={item.name} name={item.name} level={item.level} />
        ))}
      </div>
    </div>
  );
}
