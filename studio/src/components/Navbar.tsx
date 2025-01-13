// Navbar.tsx
import { Link } from "react-router-dom";
import Logo from "../assets/logo-test.svg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, isMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed flex justify-end md:hidden h-screen bg-[#0000000a] dark:bg-[#c8c8c812] w-screen z-30"
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
              className=" h-screen w-[60%] p-5 bg-white dark:bg-black"
            >
              <button className="m-5" onClick={() => isMenuOpen(!menuOpen)}>
                <X height={40} width={40} className="dark:text-white" />
              </button>
              <button onClick={() => setDarkMode(!darkMode)} className="">
                {darkMode ? (
                  <Moon height={40} width={40} className="text-white" />
                ) : (
                  <Sun height={40} width={40} />
                )}
              </button>
              <ul className=" h-[80%] mt-8">
                <li className="mb-2">
                  <Link
                    to="/"
                    className="text-black font-bold m-5  text-4xl hover:font-extrabold dark:text-white"
                    onClick={() => isMenuOpen(!menuOpen)}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/o-nas"
                    className="text-black font-bold m-5 text-4xl hover:font-extrabold dark:text-white"
                    onClick={() => isMenuOpen(!menuOpen)}
                  >
                    O nas
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/kontakt"
                    className="text-black font-bold m-5 text-4xl hover:font-extrabold dark:text-white"
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
      <nav className="bg-white sticky top-0 z-10 flex dark:bg-black p-4 md:hidden w-full justify-between shadow-lg dark:shadow-[#ffffff19]">
        <img src={Logo} width={40} height={40} className="ml-5 " />
        <div className="max-w-screen-xl">
          <button className="m-5" onClick={() => isMenuOpen(!menuOpen)}>
            <Menu height={30} width={30} className="dark:text-white" />
          </button>
        </div>
      </nav>
      <nav className="bg-white hidden sticky top-0 dark:bg-black p-4 md:flex w-full justify-center shadow-lg">
        <div className="flex justify-between w-[90%] max-w-screen-xl">
          <img src={Logo} width={40} height={40} className=" " />
          <ul className="flex space-x-4 my-auto">
            <li>
              <Link
                to="/"
                className="text-black font-bold hover:font-extrabold dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/o-nas"
                className="text-black font-bold hover:font-extrabold dark:text-white"
              >
                O nas
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                className="text-black font-bold hover:font-extrabold dark:text-white"
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
              <Moon height={22} width={22} className="text-white" />
            ) : (
              <Sun height={22} width={22} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
