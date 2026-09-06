import Tag from '../../atoms/Tag/Tag';
import styles from './ProjectItem.module.css';

export default function ProjectItem({ number, title, description, tech, link }) {
  return (
    <div className={styles.item}>
      <span className={styles.number}>{number}</span>
      <div className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
          <div className={styles.tech}>
            {tech.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
        <div className={styles.links}>
          <a href={link} target="_blank" rel="noopener" className={styles.link}>
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}
