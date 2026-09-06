import Button from '../../atoms/Button/Button';
import Hamburger from '../../atoms/Hamburger/Hamburger';
import Logo from '../../atoms/Logo/Logo';
import { RESUME_URL, NAV_LINKS } from '../../data/nav';
import useActiveSection from '../../hooks/useActiveSection';
import useMobileMenu from '../../hooks/useMobileMenu';
import useScrollHeader from '../../hooks/useScrollHeader';
import MobileMenu from '../../molecules/MobileMenu/MobileMenu';
import NavList from '../../molecules/NavList/NavList';
import styles from './Header.module.css';

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export default function Header() {
  const scrolled = useScrollHeader();
  const activeId = useActiveSection(SECTION_IDS);
  const { open, toggle, close } = useMobileMenu();

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`.trim()}>
      <div className={styles.navWrap}>
        <Logo />
        <NavList activeId={activeId} />
        <Button href={RESUME_URL} external variant="resume" className={styles.resumeBtn}>
          Resume ↗
        </Button>
        <Hamburger open={open} onClick={toggle} />
      </div>
      <MobileMenu open={open} onLinkClick={close} />
    </header>
  );
}
