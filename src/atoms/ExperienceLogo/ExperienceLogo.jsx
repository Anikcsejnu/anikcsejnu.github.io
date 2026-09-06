import styles from './ExperienceLogo.module.css';

export default function ExperienceLogo({ bg, fg, text }) {
  return (
    <div className={styles.logo}>
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill={bg} />
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fontFamily="Syne, sans-serif"
          fontWeight="800"
          fontSize={text.length > 2 ? 10 : 20}
          fill={fg}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
