import { Link } from "react-router-dom";

export default function Fotter() {
  return (
    <>
      <hr />
      <div className="bg-light text-dark dark:text-light dark:bg-dark p-4  w-full mx-auto shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_0px_100px_5px_rgba(355,355,355,0.1)]">
        <div className="container mx-auto flex justify-between w-[300px] md:w-[400px]">
          <div>
            <ul className="flex flex-col justify-center ">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/studio" className="hover:underline">
                  Studio
                </Link>
              </li>
              <li>
                <Link to="/o-nas" className="hover:underline">
                  O nas
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:underline">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col justify-center ">
              <li>Bartosz Chmielecki</li>
              <li>
                <Link to="/" className="hover:underline">
                  Paweł Glosz
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Paweł Wawrzynek
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  tel: +48 882 514 736
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center mt-4 mb-4">
        <p className="text-dark dark:text-light">&copy; 2025 Studio Uszko</p>
      </div>
    </>
  );
}
