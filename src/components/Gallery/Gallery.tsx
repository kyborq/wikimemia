import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Preview } from "../Preview";

import styles from "./Gallery.module.css";
import { useNavigate } from "react-router-dom";
import { TMeme } from "../../firebase/actions/files";
import { Modal } from "../Modal";

type Props = {
  gallery: TMeme[];
};

export const Gallery: React.FC<Props> = ({ gallery }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const navigate = useNavigate();

  return (
    <motion.div className={styles.Gallery}>
      {gallery.map((image, index) => (
        <Preview
          key={index}
          image={image.url}
          onClick={() => {
            setSelectedId(index + 1);
          }}
          layoutId={index}
          isGallery
        />
      ))}

      <AnimatePresence>
        {selectedId && (
          <Modal onClose={() => setSelectedId(null)}>
            <Preview
              image={gallery[selectedId - 1].url}
              onClick={() => {
                navigate(`/picture/${gallery[selectedId - 1].author}`);
              }}
            />
          </Modal>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
