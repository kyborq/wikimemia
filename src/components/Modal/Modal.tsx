import { useRef } from "react";
import styles from "./Modal.module.css";
import { useOnClickOutside } from "usehooks-ts";
import { motion } from "framer-motion";

type Props = {
  onClose?: () => void;
  children?: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ children, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => onClose && onClose());

  return (
    <motion.div
      className={styles.Overlay}
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
    >
      <motion.div
        ref={ref}
        className={styles.Modal}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.75, opacity: 0 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
