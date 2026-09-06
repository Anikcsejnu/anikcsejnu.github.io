import Button from '../../atoms/Button/Button';
import Reveal from '../../atoms/Reveal/Reveal';
import SectionLabel from '../../atoms/SectionLabel/SectionLabel';
import { RESUME_URL } from '../../data/nav';
import { STATS } from '../../data/stats';
import StatItem from '../../molecules/StatItem/StatItem';
import sharedStyles from '../../styles/shared.module.css';
import styles from './About.module.css';

export default function About() {
  return (
    <Reveal as="section" className={`${sharedStyles.section} ${styles.about}`} id="about">
      <div className={sharedStyles.sectionWrap}>
        <SectionLabel>01 — About</SectionLabel>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={`${sharedStyles.sectionHeading} ${styles.heading}`}>
              Turning complex
              <br />
              <em>problems into</em>
              <br />
              clean code.
            </h2>
          </div>
          <div>
            <div className={styles.statRow}>
              {STATS.map((stat) => (
                <StatItem key={stat.label} number={stat.number} label={stat.label} />
              ))}
            </div>
            <p className={styles.paragraph}>
              I'm a passionate Software Engineer based in Bangladesh, specialising in
              high-performance backend systems and enterprise applications. With over 6 years
              of hands-on experience I thrive on solving complex problems and delivering
              clean, maintainable solutions.
            </p>
            <p className={styles.paragraph}>
              My core stack includes <strong>C#</strong>, <strong>.NET / ASP.NET</strong>, and{' '}
              <strong>SQL Server</strong>. I also work with Go, Python, and C++ across the full
              software development lifecycle. I hold a Bachelor of Science in Computer Science &
              Engineering from Jahangirnagar University.
            </p>
            <div className={styles.cta}>
              <Button href={RESUME_URL} external>
                Download CV
              </Button>
              <Button href="#contact" variant="ghost">
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
