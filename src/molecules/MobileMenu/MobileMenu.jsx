import { NAV_LINKS, RESUME_URL } from '../../data/nav';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ open, onLinkClick }) {
  return (
    <div className={`${styles.menu} ${open ? styles.open : ''}`.trim()} aria-hidden={!open}>
      {NAV_LINKS.map((link) => (
        <a key={link.id} href={`#${link.id}`} className={styles.link} onClick={onLinkClick}>
          {link.label}
        </a>
      ))}
      <a href={RESUME_URL} className={styles.link} target="_blank" rel="noopener" onClick={onLinkClick}>
        Resume ↗
      </a>
    </div>
  );
}
