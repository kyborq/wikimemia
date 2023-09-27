import styles from "./Field.module.css";

type Props = {
  label?: string;
  value?: string;
  placeholder?: string;
  multiline?: boolean;
  icon?: React.ReactNode;
  onChange?: (value: string) => void;
};

export const Field: React.FC<Props> = ({
  icon,
  label,
  value,
  placeholder,
  multiline,
  onChange,
}) => {
  return (
    <div className={styles.Field}>
      <span className={styles.Label}>{label}</span>
      <div className={styles.Container}>
        {icon}
        {multiline ? (
          <textarea
            className={styles.Input}
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder={placeholder}
            value={value}
          />
        ) : (
          <input
            className={styles.Input}
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder={placeholder}
            value={value}
          />
        )}
      </div>
    </div>
  );
};
