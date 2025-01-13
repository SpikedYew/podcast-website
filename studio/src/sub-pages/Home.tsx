import { ReactTyped } from "react-typed";
import Photo1 from "../assets/test1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Home() {
  return (
    <>
      <header className=" min-h-[90vh] text-black dark:text-[#f6f6f6] pt-2 md:p-10 mx-auto flex max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl items-center justify-start">
        <div className="w-full flex flex-col md:flex-row">
          <div className=" md:w-[50%] flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl  xl:text-5xl  font-extrabold z-1 ">
              {" "}
              NAGRAJ{" "}
              <ReactTyped
                strings={["PODCAST", "WEBINAR", "SZKOLENIE"]}
                typeSpeed={60}
                backSpeed={40}
                loop
                className="text-2xl md:text-3xl lg:text-4xl  xl:text-5xl  font-extrabold z-1 "
              />
            </h1>
            <p className="font-bold text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl pt-2 dark:text-gray-300 text-gray-700">
              Chcesz nagrać podcast, webinar, lub szkolenie ale nie wiesz jak
              ustawić kamerę, lampy, mikrofon, itp itd. wpadnij do nas, my
              zrobimy to za Ciebie.{" "}
            </p>
          </div>
          <LazyLoadImage
            alt="Podcast Studio Uszko"
            height="auto"
            width="100%"
            src={Photo1}
            className="w-[100%] md:w-[50%] max-h-[400px] md:max-h-[500px] lg:max-h-[550px] xl:max-h-[600px] 2xl:max-h-full  object-cover"
          />
        </div>
      </header>
      <section className="text-black h-screen dark:text-[#f6f6f6] mx-auto flex max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl items-center justify-start">
        <div>
          <div></div>
          <img />
        </div>
      </section>
    </>
  );
}
