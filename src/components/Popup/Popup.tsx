import styles from "./Popup.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Popup: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
};
