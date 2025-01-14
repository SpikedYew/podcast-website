import { ReactTyped } from "react-typed";
import Photo1 from "../assets/test1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IconComp from "../components/IconComp";
import UsComponent from "../components/UsComponent";

export default function Home() {
  return (
    <>
      <header className="h-[100%] sm:min-h-[90vh]  text-dark dark:text-light pt-2 md:p-10 mx-auto flex max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl items-center justify-start">
        <div className="w-full flex flex-col md:flex-row">
          <div className="max-w-[100%] mt-8 md:mt-0 w-[80vw] md:max-w-[50%] mx-auto md:w-[50%] flex flex-col justify-center">
            <h1 className="max-w-[100%] text-2xl md:text-3xl lg:text-4xl  xl:text-5xl  font-extrabold z-1 ">
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
            <p className="max-w-[100%] mr-5 font-semibold text-md  lg:text-lg xl:text-xl 2xl:text-2xl pt-2 dark:text-gray-200 text-gray-750">
              Chcesz nagrać podcast, webinar lub szkolenie, ale nie wiesz, jak
              ustawić kamerę, lampy czy mikrofon? Nie martw się – wpadnij do
              nas, a my zajmiemy się wszystkim!{" "}
            </p>
          </div>
          <LazyLoadImage
            alt="Podcast Studio Uszko"
            height="auto"
            width="100%"
            src={Photo1}
            className="w-[80vw] mx-auto mt-5 md:mt-0 md:w-[50%] max-h-[400px] md:max-h-[450px] lg:max-h-[500px] xl:max-h-[550px] 2xl:max-h-full  object-cover"
          />
        </div>
      </header>
      <section className="w-[80%] md:w-auto h-[100%] sm:min-h-[30vh]  text-dark dark:text-light pt-2 md:p-10 mx-auto flex max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl items-center justify-start">
        <IconComp />
      </section>
      <UsComponent />
    </>
  );
}
