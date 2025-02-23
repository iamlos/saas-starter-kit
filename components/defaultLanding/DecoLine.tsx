import styles from './DecoLine.module.css';

interface DecoLineProps {
  className?: string;
}

export const DecoLine: React.FC<DecoLineProps> = ({ className }) => {
  return (
    <div className={`${styles.decoLine} ${className || ''}`}>
      <span className={styles.plusSign} aria-hidden="true"></span>
      <span className={styles.plusSign} aria-hidden="true"></span>
      <span className={styles.plusSign} aria-hidden="true"></span>
    </div>
  );
};

export default DecoLine;