import Reveal from '../../atoms/Reveal/Reveal';
import SectionLabel from '../../atoms/SectionLabel/SectionLabel';
import { CONTACT_ITEMS } from '../../data/contact';
import ContactItem from '../../molecules/ContactItem/ContactItem';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <Reveal as="section" className={styles.contact} id="contact">
      <div className={styles.inner}>
        <SectionLabel onLight>05 — Contact</SectionLabel>
        <h2 className={styles.heading}>
          Let's Work
          <br />
          Together.
        </h2>
        <p className={styles.sub}>
          Open to new opportunities, collaborations, and interesting conversations.
        </p>
        <div className={styles.links}>
          {CONTACT_ITEMS.map((item) => (
            <ContactItem key={item.label} label={item.label} value={item.value} url={item.url} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
