import { useNavigate, useParams } from "react-router-dom";
import { getImageById } from "../firebase/actions/files";
import { useEffectOnce } from "usehooks-ts";

export const PicturePage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const getImage = async () => {
    if (id) {
      const image = await getImageById(id);
      navigate(image!);
    }
  };

  useEffectOnce(() => {
    getImage();
  });

  return (
    <>
      <h1>Wait!</h1>
    </>
  );
};
