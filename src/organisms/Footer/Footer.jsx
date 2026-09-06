import Logo from '../../atoms/Logo/Logo';
import { NAV_LINKS } from '../../data/nav';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <Logo />
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <p className={styles.copy}>&copy; 2024 Mohammad Atikur Rhaman</p>
      </div>
    </footer>
  );
}
