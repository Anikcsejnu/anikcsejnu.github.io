import Cursor from '../../atoms/Cursor/Cursor';
import useTypedText from '../../hooks/useTypedText';

export default function TypedText({ phrases, className }) {
  const text = useTypedText(phrases);
  return (
    <p className={className}>
      <span>{text}</span>
      <Cursor />
    </p>
  );
}
