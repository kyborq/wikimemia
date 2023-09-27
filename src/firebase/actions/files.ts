import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../config";
import {
  DocumentData,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

export const uploadImage = async (file: File, explanation: string) => {
  try {
    const user = auth.currentUser;

    if (user) {
      const md = {
        contentType: "image/jpeg",
      };

      // const filename = `memes/${uuid4()}.${file.name.s}`;
      const memesRef = ref(storage, `memes/${file.name}`);
      const result = await uploadBytes(memesRef, file, md);
      const author = user.uid;

      console.log(file);

      const a = await addDoc(collection(db, "memes"), {
        path: `memes/${file.name}`,
        explanation,
        author,
      });

      console.log(result, a);
    }
  } catch (e) {
    console.error(e);
  }
};

export type TMeme = {
  explanation: string;
  author: string;
  url: string;
};

export const getImageUrl = async (path: string) => {
  const imagesRef = ref(storage, path);
  return await getDownloadURL(imagesRef);
};

export const getDataFromDoc = async (data: DocumentData) => {
  const downloadableUrl = await getImageUrl(data["path"]);

  const meme: TMeme = {
    author: data["author"],
    explanation: data["explanation"],
    url: downloadableUrl,
  };

  return meme;
};

export const getAllImages = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "memes"));

    const memes: TMeme[] = [];

    querySnapshot.forEach(async (doc) => {
      const data = doc.data();

      const meme: TMeme = {
        author: data["author"],
        explanation: data["explanation"],
        url: data["path"],
      };

      memes.push(meme);
    });

    return memes;
  } catch (e) {
    console.error(e);
  }
};

export const getMemes = async () => {
  const images = await getAllImages();
  if (images) {
    const imagesPromises = images.map(async (image) => {
      const downloadableUrl = await getImageUrl(image.url);
      return {
        ...image,
        url: downloadableUrl,
      };
    });

    return Promise.all(imagesPromises);
  }

  return [];
  // const image = await getImageUrl(data["path"]);
};

export const memesListener = (onData: (data: TMeme[]) => void) => {
  const memes = collection(db, "memes");
  const unsub = onSnapshot(memes, async (doc) => {
    const changed = doc.docChanges();

    const ps = changed.map(async (snapshot) => {
      const doc = snapshot.doc.data();
      const data = await getDataFromDoc(doc);
      return data;
    });

    const res = await Promise.all(ps);

    onData(res);
  });

  return unsub;
};

export const getImageById = async (id: string) => {
  const docRef = doc(db, "memes", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const doc = docSnap.data();
    const data = await getDataFromDoc(doc);
    return data.url;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
