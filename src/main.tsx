import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Books } from "./pages/Books"
import { ChangeBook } from "./pages/ChangeBook"
import { Authors } from "./pages/Authors"
import { ChangeAuthors } from "./pages/ChangeAuthors"
import {NextUIProvider} from "@nextui-org/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/changebook",
    element: <ChangeBook />,
  },
  {
    path: "/authors",
    element: <Authors />,
  },
  {
    path: "/changeauthors",
    element: <ChangeAuthors/>,
  },
]);
const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
      <NextUIProvider>
      <RouterProvider router={router} />
      </NextUIProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
