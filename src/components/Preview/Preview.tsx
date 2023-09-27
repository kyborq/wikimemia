import { motion } from "framer-motion";
import styles from "./Preview.module.css";
import { classNames } from "../../utils/classNames";

type Props = {
  layoutId?: number;
  image: string;
  isGallery?: boolean;
  onClick?: () => void;
};

export const Preview: React.FC<Props> = ({
  layoutId,
  image,
  isGallery,
  onClick,
}) => {
  return (
    <motion.div
      layoutId={`${layoutId}`}
      className={classNames(styles.Preview, isGallery && styles.Small)}
      style={{
        backgroundImage: `url(${image})`,
      }}
      onClick={onClick}
    >
      <motion.div className={styles.Overlay}>
        <motion.img
          loading="lazy"
          src={image}
          className={styles.Image}
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};
