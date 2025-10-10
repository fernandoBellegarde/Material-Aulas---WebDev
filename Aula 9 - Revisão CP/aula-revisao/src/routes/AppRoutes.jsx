import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Contact from "../pages/Contact";
import App from "../App";
import About from "../pages/About";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />, 
    children: [
      {        
        index: true, 
        element: <Home />,     
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      }
    ],
  },
]);
