import Button from '../../atoms/Button/Button';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';
import TypedText from '../../molecules/TypedText/TypedText';
import styles from './Hero.module.css';

const TYPED_PHRASES = [
  '.NET / C# Developer',
  'Backend Specialist',
  'Software Engineer',
  'API Architect',
  'Problem Solver',
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.textSide}>
          <span className={styles.eyebrow}>Software Engineer · Bangladesh</span>
          <h1 className={styles.name}>
            <span className={styles.nameLine}>Mohammad</span>
            <span className={`${styles.nameLine} ${styles.nameAccent}`}>Atikur</span>
            <span className={styles.nameLine}>Rhaman</span>
          </h1>
          <TypedText phrases={TYPED_PHRASES} className={styles.role} />
          <p className={styles.bio}>
            6+ years crafting high-performance backend systems and enterprise applications.
            Specialising in <strong>.NET</strong>, <strong>C#</strong>, and scalable API architecture.
          </p>
          <div className={styles.cta}>
            <Button href="#projects">View Work</Button>
            <Button href="#contact" variant="ghost">
              Get in Touch
            </Button>
          </div>
        </div>
        <div className={styles.photoSide}>
          <div className={styles.photoFrame}>
            <img src="/assets/profile-pic.png" alt="Mohammad Atikur Rhaman" />
            <div className={styles.badge}>
              <span className={styles.badgeNum}>6+</span>
              <span className={styles.badgeTxt}>Years Exp.</span>
            </div>
          </div>
          <div className={styles.socials}>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className={styles.scroll}>
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
