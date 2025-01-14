import Photo2 from "../assets/studio-1.jpg";
import Photo3 from "../assets/us.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function UsComponent() {
  return (
    <section className="text-dark dark:text-[#f6f6f6] mx-auto flex-col flex max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl items-center justify-start">
      <div className="mx-auto items-center md:h-[50%] md:w-[90%] flex flex-col md:flex-row">
        <div className="w-[80%] md:w-[50%] min-h-[50%] h-full flex flex-col justify-center m-4 p-0 md:p-5">
          <h2 className="font-bold text-2xl ">Poznaj nasze studio!</h2>
          <p className="pt-4 dark:text-gray-200 text-gray-750">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            dolores iste sit eos doloribus officia molestias quae deleniti
            veritatis numquam neque accusamus, sed dolorem eius, exercitationem
            magni quia nihil corporis.
          </p>
        </div>
        <LazyLoadImage
          src={Photo2}
          className="w-[80%] md:w-[50%] h-[100%] object-cover "
        />
      </div>
      <div className="mt-10 mx-auto items-center md:h-[50%] md:w-[90%] flex flex-col md:flex-row-reverse">
        <div className="w-[80%] md:w-[50%] min-h-[50%] h-full flex flex-col justify-center m-4 p-0 md:p-5">
          <h2 className="font-bold text-2xl ">Skontaktuj się z nami!</h2>
          <p className="pt-4 dark:text-gray-200 text-gray-750">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            dolores iste sit eos doloribus officia molestias quae deleniti
            veritatis numquam neque accusamus, sed dolorem eius, exercitationem
            magni quia nihil corporis.
          </p>
        </div>
        <LazyLoadImage
          src={Photo3}
          className="w-[80%] md:w-[50%] h-[100%] object-cover "
        />
      </div>
    </section>
  );
}
