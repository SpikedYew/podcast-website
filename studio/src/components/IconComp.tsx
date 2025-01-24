import { Mic, Clapperboard, Scissors } from "lucide-react";

const iconsData: TypesIconData[] = [
  {
    icon: Mic,
    text: "Nagraj Dzwięk",
  },
  {
    icon: Clapperboard,
    text: "Nagraj Wideo",
  },
  {
    icon: Scissors,
    text: "Edytuj Materiał",
  },
];

interface TypesIconData {
  icon: React.ComponentType<{ className?: string }>; // Component with optional className prop
  text: string;
}

export default function IconComp() {
  return (
    <>
      <div className="mt-2 mb-12 flex flex-wrap justify-around w-full h-[100%] p-4">
        {iconsData.map((val, i) => {
          const IconComponent = val.icon; // Access the icon dynamically
          return (
            <div
              key={i}
              className="flex flex-col items-center w-full md:w-[30%] p-4"
            >
              {/* Render the icon with specific props */}
              <IconComponent className="w-12 h-12 dark:text-light text-dark mb-4" />
              {/* Render the text */}
              <p className="text-center xl:text-xl dark:text-gray-200 text-gray-750">
                {val.text}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
