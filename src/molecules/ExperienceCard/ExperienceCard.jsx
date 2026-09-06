import ExperienceLogo from '../../atoms/ExperienceLogo/ExperienceLogo';
import Tag from '../../atoms/Tag/Tag';
import styles from './ExperienceCard.module.css';

export default function ExperienceCard({ role, company, period, logo, points, tags }) {
  return (
    <div className={styles.card}>
      <div className={styles.logoWrap}>
        <ExperienceLogo bg={logo.bg} fg={logo.fg} text={logo.text} />
      </div>
      <div>
        <div className={styles.meta}>
          <div>
            <h3 className={styles.role}>{role}</h3>
            <p className={styles.company}>{company}</p>
          </div>
          <span className={styles.period}>{period}</span>
        </div>
        <ul className={styles.points}>
          {points.map((point) => (
            <li key={point} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
