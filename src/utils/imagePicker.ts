type FileCallback = (file: File) => void;

export const imagePicker = (callback: FileCallback) => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.click();
  input.onchange = () => {
    if (input.files) {
      const pickedFile = input.files[0];
      callback(pickedFile);
    }
  };
};
