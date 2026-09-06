import useInView from '../../hooks/useInView';
import sharedStyles from '../../styles/shared.module.css';

export default function Reveal({
  as: Tag = 'div',
  item = false,
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useInView();
  const base = item ? sharedStyles.revealItem : sharedStyles.reveal;
  const classes = `${base} ${inView ? sharedStyles.inView : ''} ${className}`.trim();

  return (
    <Tag
      ref={ref}
      className={classes}
      style={item ? { '--reveal-delay': `${delay}s` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
