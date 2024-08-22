import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import reportWebVitals from "./reportWebVitals";
import AppLayout from "./AppLayout.js";
//import Contact from "./Components/Contact.js";
import About from "./Components/About.js";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Shimmer from "./Components/Shimmer.js";

const Contact = lazy(() => import("./Components/Contact.js"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
