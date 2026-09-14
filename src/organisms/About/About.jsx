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
          <div className={styles.right}>
            <div className={styles.statRow}>
              {STATS.map((stat) => (
                <StatItem key={stat.label} number={stat.number} label={stat.label} />
              ))}
            </div>
            <p className={styles.paragraph}>
              I'm a Senior Software Developer based in Bangladesh, currently building{' '}
              <strong>Optimizely CMS</strong> solutions. With over 6 years of experience designing,
              building, and optimizing scalable desktop and web applications, I have a proven track
              record leading feature development, mentoring engineering teams, and improving system
              performance — including a 50–70% database query efficiency gain.
            </p>
            <p className={styles.paragraph}>
              My core stack includes <strong>.NET / C#</strong>, <strong>React</strong>, Python, and{' '}
              <strong>C++</strong>, with hands-on experience spanning CMS platforms, enterprise
              desktop software, and cross-functional Agile teams. I hold a Bachelor of Science in
              Computer Science &amp; Engineering from Jagannath University.
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
