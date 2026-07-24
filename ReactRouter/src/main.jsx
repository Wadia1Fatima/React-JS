import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       }
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRouterFromElements(
    <Route path = '/' element = {<Layout/>}>
        <Route path = '' element = {<Home />} />
        <Route path = 'about' element = {<About />} />
        <Route path = 'contact' element = {<Contact />} />
        <Route path = 'user/:userid' element = {<HUser />} />
        <Route path = 'github' element = {<GitHub />} />
    </Route>
  )
)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);