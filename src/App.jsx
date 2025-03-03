import "./App.css";
import Header from "./COMPONENTS/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./COMPONENTS/Footer";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { ICON } from "./ASSETS/IMAGES/GRAPHICS/graphics";

const Home = lazy(() => import("./PAGES/Home"));
const Contact = lazy(() => import("./PAGES/Contact"));
const About = lazy(() => import("./PAGES/About"));
const Projects = lazy(() => import("./PAGES/Projects"));
const Services = lazy(() => import("./PAGES/Services"));

export default function App() {
  const [showContact, setShowContact] = useState(false);

  function PageLayout() {
    return (
      <>
        <Suspense
          fallback={
            <section
              className={`preloaderWrapper h-full w-full fixed left-0 top-0 bg-white backdrop-blur-lg grid place-items-center`}
            >
              <div className=" h-24 w-24 lg:h-32 lg:w-32 rounded-full flex items-center relative z-[11] justify-center shrink-0 bg-main">
                <img
                  src={ICON}
                  className="preloaderImage w-[70px] lg:w-[100px]"
                  alt="icon"
                />
              </div>
            </section>
          }
        >
          <Header showContact={showContact} setShowContact={setShowContact} />
          <Outlet />
          <Contact showContact={showContact} setShowContact={setShowContact} />
          <Footer />
        </Suspense>
      </>
    );
  }

  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <main className="bgGradient pt-32 -m-8">
      <Toaster />
      <RouterProvider router={pageRoutes} />
    </main>
  );
}
