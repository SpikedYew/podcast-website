import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./sub-pages/Home";
import About from "./sub-pages/About";
import Kontakt from "./sub-pages/Kontakt";
import Studio from "./sub-pages/Studio";
import Fotter from "./components/Fotter";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { useEffect, useState } from "react";
export interface DarkMode {
  darkMode: boolean;
}

function AnimateRoutes({ darkMode }: DarkMode) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home darkMode={darkMode} />
            </PageWrapper>
          }
        />
        <Route
          path="/studio"
          element={
            <PageWrapper>
              <Studio />
            </PageWrapper>
          }
        />
        <Route
          path="/o-nas"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/kontakt"
          element={
            <PageWrapper>
              <Kontakt darkMode={darkMode} />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
interface PageWrapperProps {
  children: ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      {/* <motion.div
        className="bg-white dark:bg-black shadow-2xl shadow-[#00000011] "
        initial={{
          x: "-100vw",
          width: "100vw",
          height: "100vh",
          opacity: 1,
          rotate: 60,
        }}
        animate={{
          x: 0,
          width: "0vw", // Shrink the width during the animation, doesn't cover content
          height: "100vh",
          opacity: 1,
          rotate: 60,
        }}
        exit={{
          x: "100vw",
          width: "100vw",
          height: "100vh",
          opacity: 1,
          rotate: 60,
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.5 },
          x: { duration: 0.8, delay: 0.2 },
        }}
        style={{
          position: "absolute", // Keeps it out of the page flow
          top: 0,
          left: 0,
          zIndex: 10, // Ensure it's behind the content
          pointerEvents: "none", // Prevent it from interfering with user interaction
          overflow: "hidden", // Ensures no overflow occurs
          // Keep the scaling start point to the left
        }}
      ></motion.div> */}

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
        className="z-1"
      >
        {children}
      </motion.main>
    </>
  );
}

function App() {
  const savedDarkMode = localStorage.getItem("darkMode") === "true";

  const [darkMode, setDarkMode] = useState(savedDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true"); // Save dark mode preference
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false"); // Save light mode preference
    }
  }, [darkMode]);
  return (
    <>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <AnimateRoutes darkMode={darkMode} />
        <Fotter />
      </BrowserRouter>
    </>
  );
}

export default App;
