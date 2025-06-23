import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import PageLoader from "../components/PageLoader";

// Lazy load pages for better performance
const Home = lazy(() => import("../features/home/Home"));
const About = lazy(() => import("../features/about/About"));
const Services = lazy(() => import("../features/services/Services"));
const Join = lazy(() => import("../features/join/Join"));
const Contact = lazy(() => import("../features/contact/Contact"));

// Create router with routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "join",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Join />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);
