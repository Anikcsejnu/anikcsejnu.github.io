import styles from './Button.module.css';

export default function Button({
  variant = 'lime',
  href,
  external = false,
  onClick,
  children,
  className = '',
}) {
  const classes = `${styles[variant]} ${className}`.trim();

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noopener' } : {};
    return (
      <a href={href} className={classes} {...externalProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
