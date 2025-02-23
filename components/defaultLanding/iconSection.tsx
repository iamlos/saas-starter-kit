import styles from './iconSection.module.css';

interface DecoBlockBorderProps {
  children?: React.ReactNode;
  className?: string;
}

export const DecoBlockBorder: React.FC<DecoBlockBorderProps> = ({ children, className }) => {
  return (
    <div className={`${styles.decoBlockBorder} ${className || ''}`}>
      <div className={styles.deco}></div>
      {children}
    </div>
  );
};

export default DecoBlockBorder;