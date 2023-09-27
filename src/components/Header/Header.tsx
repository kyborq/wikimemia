import { Home, Key, LogOut, PencilRuler, PlusCircle } from "lucide-react";

import { Navigation } from "../Navigation";
import { IconButton } from "../IconButton";

import styles from "./Header.module.css";
import { imagePicker } from "../../utils/imagePicker";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Modal } from "../Modal";
import { Preview } from "../Preview";
import { Form } from "../Form/Form";
import { uploadImage } from "../../firebase/actions/files";
import { logout } from "../../firebase/actions/userLogout";
import { login } from "../../firebase/actions/userLogin";

type Props = {
  isAuthorized?: boolean;
};

export const Header: React.FC<Props> = ({ isAuthorized }) => {
  const [uploadModal, setUploadModal] = useState<File | null>(null);

  const handlePicker = () => {
    imagePicker((image) => {
      // const objectUrl = ;
      setUploadModal(image);
    });
  };

  return (
    <div className={styles.Header}>
      <div className={styles.NavLeft}>
        <Navigation icon={<Home />} path="/" />
        <Navigation icon={<PencilRuler />} path="/editor" />
      </div>

      <div className={styles.Logo}>
        <h1 className={styles.Title}>WikiMemia</h1>
        <span className={styles.Description}>Place for memes</span>
      </div>

      <div className={styles.NavRight}>
        {isAuthorized ? (
          <>
            <IconButton icon={<PlusCircle />} onClick={handlePicker} />
            <IconButton icon={<LogOut />} onClick={logout} />
          </>
        ) : (
          <IconButton icon={<Key />} onClick={login} />
        )}
      </div>

      <AnimatePresence>
        {!!uploadModal && (
          <Modal onClose={() => setUploadModal(null)}>
            <Preview image={URL.createObjectURL(uploadModal)} />
            <Form
              onSubmit={(explanation) => {
                setUploadModal(null);
                uploadImage(uploadModal, explanation);
              }}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
