import Icon from '../../atoms/Icon/Icon';
import { SOCIALS } from '../../data/socials';
import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  return (
    <div className={styles.list}>
      {SOCIALS.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target={social.url.startsWith('http') ? '_blank' : undefined}
          rel={social.url.startsWith('http') ? 'noopener' : undefined}
          aria-label={social.label}
          className={styles.icon}
        >
          <Icon name={social.icon} />
        </a>
      ))}
    </div>
  );
}
