import Reveal from '../../atoms/Reveal/Reveal';
import SectionLabel from '../../atoms/SectionLabel/SectionLabel';
import { SKILL_CATEGORIES, SKILL_LEGEND } from '../../data/skills';
import SkillRow from '../../molecules/SkillRow/SkillRow';
import sharedStyles from '../../styles/shared.module.css';
import styles from './Skills.module.css';

const LEGEND_DOT_CLASS = {
  expert: styles.dotExpert,
  mid: styles.dotMid,
  basic: styles.dotBasic,
};

export default function Skills() {
  return (
    <Reveal as="section" className={`${sharedStyles.section} ${styles.skills}`} id="skills">
      <div className={sharedStyles.sectionWrap}>
        <SectionLabel>02 — Skills</SectionLabel>
        <h2 className={sharedStyles.sectionHeading}>
          Technical
          <br />
          <em>toolkit.</em>
        </h2>
        <div className={styles.table}>
          {SKILL_CATEGORIES.map((row) => (
            <SkillRow key={row.category} category={row.category} items={row.items} />
          ))}
        </div>
        <div className={styles.legend}>
          {SKILL_LEGEND.map((entry) => (
            <span key={entry.level}>
              <span className={`${styles.dot} ${LEGEND_DOT_CLASS[entry.level]}`}></span>
              {entry.label}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
