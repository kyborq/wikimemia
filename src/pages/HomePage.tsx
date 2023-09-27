import { TMeme, memesListener } from "../firebase/actions/files";
import { useEffect, useState } from "react";
import { Gallery } from "../components/Gallery";

export const HomePage = () => {
  const [memes, setMemes] = useState<TMeme[]>([]);

  useEffect(() => {
    const u = memesListener((data) => {
      // console.log("new data", data);

      setMemes((old) => [...old, ...data]);
    });

    // getMemes().then((res) => {
    //   setMemes(res);
    // });

    return () => u();
  }, []);

  return (
    <div>
      <Gallery gallery={memes} />
    </div>
  );
};
