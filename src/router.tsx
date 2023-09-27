import { createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/HomePage";
import { EditorPage } from "./pages/EditorPage";
import { PicturePage } from "./pages/PicturePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "editor",
        element: <EditorPage />,
      },
      {
        path: "picture/:id",
        element: <PicturePage />,
      },
    ],
  },
]);
