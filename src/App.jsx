import "./App.css";
import Header from "./COMPONENTS/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./COMPONENTS/Footer";
import Home from "./PAGES/Home";
import { Toaster } from "react-hot-toast";
import Services from "./PAGES/Services";
import Projects from "./PAGES/Projects";
import About from "./PAGES/About";
import Contact from "./PAGES/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function App() {
  const [showContact, setShowContact] = useState(false);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
      delay: 200,
      once: true,
    });

    return () => AOS.refresh();
  }, []);

  function PageLayout() {
    return (
      <>
        <Header showContact={showContact} setShowContact={setShowContact} />
        <Outlet />
        <Contact showContact={showContact} setShowContact={setShowContact} />
        <Footer />
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
