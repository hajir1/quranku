import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/styles/animation.module.scss";
import { createBrowserRouter } from "react-router-dom";
import Home from "./page/homeAlquranPage";
import { RouterProvider } from "react-router-dom";
import QueryControls from "./query/query";
import OptionProvider from "./context/opsi";
import DetailAlQuranPAge from "./page/detailAlQuranPage";
import BookMarkPage from "./component/fragment/detailSurah/bookMarkPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/surah/:id",
    element: <DetailAlQuranPAge />,
  },
  {
    path: "/surah/:id/:page",
    element: <BookMarkPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryControls>
      <OptionProvider>
        <RouterProvider router={router}></RouterProvider>
      </OptionProvider>
    </QueryControls>
  </React.StrictMode>
);