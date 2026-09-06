import { NAV_LINKS } from '../../data/nav';
import styles from './NavList.module.css';

export default function NavList({ activeId }) {
  return (
    <nav className={styles.nav}>
      {NAV_LINKS.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`${styles.link} ${activeId === link.id ? styles.active : ''}`.trim()}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
