import { classNames } from "../../utils/classNames";
import styles from "./Category.module.css";

type Props = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

export const Category: React.FC<Props> = ({ icon, label, active }) => {
  return (
    <div className={classNames(styles.Category, active && styles.Active)}>
      {icon}
      <span className={styles.Label}>{label}</span>
    </div>
  );
};
