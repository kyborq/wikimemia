import styles from "./IconButton.module.css";

type Props = {
  icon: React.ReactNode;
  onClick?: () => void;
  onHover?: () => void;
};

export const IconButton: React.FC<Props> = ({ icon, onClick, onHover }) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
      className={styles.IconButton}
    >
      {icon}
    </button>
  );
};
