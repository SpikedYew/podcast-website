import { LazyLoadImage } from "react-lazy-load-image-component";
import Photo1 from "../assets/glosz.jpg";
import Photo2 from "../assets/ja.jpg";
import Photo3 from "../assets/wawrzyn.jpg";

export default function UsAbout() {
  return (
    <>
      {" "}
      <section className="text-dark dark:text-[#f6f6f6] mt-10 mb-10 mx-auto flex-col flex max-w-[90vw] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl items-center justify-start">
        {/* First Section */}
        <div className="mx-auto items-center md:h-[50%] md:w-[90%] flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] flex flex-col justify-center m-4 p-4 md:p-5">
            <h2 className="font-bold text-xl md:text-2xl text-center md:text-left">
              Paweł Wawrzynek - Video
            </h2>
            <p className="pt-4 text-sm md:text-base dark:text-gray-200 text-gray-750 text-center md:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              dolores iste sit eos doloribus officia molestias quae deleniti
              veritatis numquam neque accusamus, sed dolorem eius,
              exercitationem magni quia nihil corporis.
            </p>
            <div className="mt-4 text-center md:text-left">
              <button className="px-6 py-2 bg-dark text-white rounded-md">
                Learn More
              </button>
            </div>
          </div>
          <LazyLoadImage
            src={Photo3}
            className="w-full md:w-[50%] max-h-[500px] object-cover"
          />
        </div>

        {/* Second Section */}
        <div className="mt-10 mx-auto items-center md:h-[50%] md:w-[90%] flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-[50%] flex flex-col justify-center m-4 p-4 md:p-5">
            <h2 className="font-bold text-xl md:text-2xl text-center md:text-left">
              Paweł Glosz - Audio
            </h2>
            <p className="pt-4 text-sm md:text-base dark:text-gray-200 text-gray-750 text-center md:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              dolores iste sit eos doloribus officia molestias quae deleniti
              veritatis numquam neque accusamus, sed dolorem eius,
              exercitationem magni quia nihil corporis.
            </p>
            <div className="mt-4 text-center md:text-left">
              <button className="px-6 py-2 bg-dark text-white rounded-md">
                Contact Us
              </button>
            </div>
          </div>
          <LazyLoadImage
            src={Photo1}
            className="w-full md:w-[50%] max-h-[500px] object-cover"
          />
        </div>

        {/* Third Section */}
        <div className="mt-10 mx-auto items-center md:h-[50%] md:w-[90%] flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] flex flex-col justify-center m-4 p-4 md:p-5">
            <h2 className="font-bold text-xl md:text-2xl text-center md:text-left">
              Bartosz Chmielecki - Manager
            </h2>
            <p className="pt-4 text-sm md:text-base dark:text-gray-200 text-gray-750 text-center md:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              dolores iste sit eos doloribus officia molestias quae deleniti
              veritatis numquam neque accusamus, sed dolorem eius,
              exercitationem magni quia nihil corporis.
            </p>
            <div className="mt-4 text-center md:text-left">
              <button className="px-6 py-2 bg-dark text-white rounded-md">
                Explore Offer
              </button>
            </div>
          </div>
          <LazyLoadImage
            src={Photo2}
            className="w-full md:w-[50%] max-h-[500px] object-cover"
          />
        </div>
      </section>
    </>
  );
}
