import sharedStyles from '../../styles/shared.module.css';

export default function SectionLabel({ children, onLight = false }) {
  return (
    <div className={`${sharedStyles.sectionLabel} ${onLight ? sharedStyles.labelOnLight : ''}`.trim()}>
      {children}
    </div>
  );
}
