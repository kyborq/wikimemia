import { useState } from "react";
import { Field } from "../Field";

import styles from "./Form.module.css";

type Props = {
  onSubmit?: (value: string) => void;
};

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.Form}>
      <h3 className={styles.Title}>Submit</h3>
      <div className={styles.Content}>
        <Field
          label="Explanation"
          multiline
          onChange={setValue}
          value={value}
        />
      </div>
      <button
        className={styles.Button}
        onClick={() => onSubmit && onSubmit(value)}
      >
        Done!
      </button>
    </div>
  );
};
