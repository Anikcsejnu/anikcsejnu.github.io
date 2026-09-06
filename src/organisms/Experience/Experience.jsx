import Reveal from '../../atoms/Reveal/Reveal';
import SectionLabel from '../../atoms/SectionLabel/SectionLabel';
import { EXPERIENCE } from '../../data/experience';
import ExperienceCard from '../../molecules/ExperienceCard/ExperienceCard';
import sharedStyles from '../../styles/shared.module.css';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <Reveal as="section" className={`${sharedStyles.section} ${styles.experience}`} id="experience">
      <div className={sharedStyles.sectionWrap}>
        <SectionLabel>03 — Experience</SectionLabel>
        <h2 className={sharedStyles.sectionHeading}>
          Work
          <br />
          <em>history.</em>
        </h2>
        <div className={styles.list}>
          {EXPERIENCE.map((entry, index) => (
            <Reveal key={entry.id} item delay={index * 0.1}>
              <ExperienceCard {...entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
