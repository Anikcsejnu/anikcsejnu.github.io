import { ICON_PATHS } from '../../data/icons';

function EmailGlyph() {
  return (
    <>
      <rect x="2" y="4" width="20" height="16" rx="0" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  );
}

export default function Icon({ name, width = 18, height = 18, className }) {
  if (name === 'email') {
    return (
      <svg
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={className}
        aria-hidden="true"
      >
        <EmailGlyph />
      </svg>
    );
  }

  const icon = ICON_PATHS[name];
  if (!icon) return null;

  return (
    <svg
      viewBox={icon.viewBox}
      width={width}
      height={height}
      fill={icon.fill}
      className={className}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
