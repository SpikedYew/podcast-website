// Navbar.tsx
import { Link } from "react-router-dom";
import Logo from "../assets/logo-site-light.svg";
import LogoDark from "../assets/logo-site-dark.svg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Sun, Moon, Menu, X } from "lucide-react";

export interface DarkMode {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ darkMode, setDarkMode }: DarkMode) => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.1;
      if (window.scrollY > threshold) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check localStorage for existing darkMode preference

  const [menuOpen, isMenuOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed flex justify-end md:hidden h-screen bg-menushadowlight dark:bg-menushadow w-screen z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className=" h-screen w-[60%] p-5 bg-light dark:bg-dark"
            >
              <button className="m-5" onClick={() => isMenuOpen(!menuOpen)}>
                <X height={40} width={40} className="dark:text-light" />
              </button>
              <button onClick={() => setDarkMode(!darkMode)} className="">
                {darkMode ? (
                  <Moon height={40} width={40} className="text-light" />
                ) : (
                  <Sun height={40} width={40} />
                )}
              </button>
              <ul className=" h-[80%] mt-8">
                <li className="mb-2">
                  <Link
                    to="/"
                    className="text-dark font-bold m-5  text-4xl hover:font-extrabold dark:text-light"
                    onClick={() => isMenuOpen(!menuOpen)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/studio"
                    className="text-dark font-bold hover:font-extrabold dark:text-light"
                  >
                    Studio
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/o-nas"
                    className="text-dark font-bold m-5 text-4xl hover:font-extrabold dark:text-light"
                    onClick={() => isMenuOpen(!menuOpen)}
                  >
                    O nas
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/kontakt"
                    className="text-dark font-bold m-5 text-4xl hover:font-extrabold dark:text-light"
                    onClick={() => isMenuOpen(!menuOpen)}
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.nav
        animate={{
          height: isShrunk ? "80px" : "100px", // Adjust height values as needed
          // Optional: Adjust scale
        }}
        transition={{ duration: 0.5 }}
        className="bg-light dark:bg-dark sticky top-0 z-10 flex  md:hidden w-full justify-between shadow-2xl dark:shadow-[#bbbbbb17]"
      >
        {!darkMode ? (
          <img src={Logo} width={40} height={40} className="ml-5" />
        ) : (
          <img src={LogoDark} width={40} height={40} className="ml-5" />
        )}

        <button className="m-5" onClick={() => isMenuOpen(!menuOpen)}>
          <Menu height={30} width={30} className="dark:text-light" />
        </button>
      </motion.nav>
      <motion.nav
        animate={{
          height: isShrunk ? "80px" : "100px", // Adjust height values as needed
          // Optional: Adjust scale
          width: "100%",
        }}
        transition={{ duration: 0.5 }}
        className="bg-light dark:bg-dark hidden sticky top-0 z-10  p-4 md:flex min-w-full justify-center  shadow-2xl dark:shadow-[#bbbbbb17]"
      >
        <div className="flex justify-between w-[90%] max-w-screen-xl">
          {!darkMode ? (
            <img src={Logo} width={100} height={40} />
          ) : (
            <img src={LogoDark} width={100} height={40} />
          )}
          <ul className="flex space-x-4 my-auto">
            <li>
              <Link
                to="/"
                className="text-dark font-bold hover:font-extrabold dark:text-light"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/studio"
                className="text-dark font-bold hover:font-extrabold dark:text-light"
              >
                Studio
              </Link>
            </li>
            <li>
              <Link
                to="/o-nas"
                className="text-dark font-bold hover:font-extrabold dark:text-light"
              >
                O nas
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                className="text-dark font-bold hover:font-extrabold dark:text-light"
              >
                Kontakt
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="my-auto p-1 ml-5 h-10 w-5"
          >
            {darkMode ? (
              <Moon height={22} width={22} className="text-light" />
            ) : (
              <Sun height={22} width={22} />
            )}
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
