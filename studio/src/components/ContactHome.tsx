export interface DarkMode {
  darkMode: boolean;
}

export default function ContactHome({ darkMode }: DarkMode) {
  return (
    <>
      <div className="max-w-[92vw] sm:max-w-6xl mt-12 mb-12 mx-auto">
        <h1 className="text-2xl font-bold text-dark mb-8 dark:text-light text-center">
          Kontakt
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-dark dark:text-light">
          <div className="p-10">
            <h1 className="text-xl font-bold mb-4">Zadzwoń do nas!</h1>
            <div className="flex justify-between mb-2">
              <h2>Bartosz Chmielecki</h2>
              <h2>+48 511 922 812</h2>
            </div>
            <div className="flex justify-between mb-2">
              <h2>Paweł Glosz</h2>
              <h2>+48 223 001 235</h2>
            </div>
            <div className="flex justify-between mb-2">
              <h2>Paweł Wawrzynek</h2>
              <h2>+48 512 221 024</h2>
            </div>
            <h1 className="text-xl font-bold mb-4">Napisz do nas!</h1>
            <div className="flex justify-between mb-2">
              <h2>Studio</h2>
              <h2>studio@studiouszko.pl</h2>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              textAlign: "right",
              width: "100%",
              height: "400px",
            }}
          >
            <div
              className=""
              style={{
                overflow: "hidden",
                background: "none",
                width: "100%",
                height: "400px",
              }}
            >
              <iframe
                title="Google Map"
                className="gmap_iframe"
                style={{
                  width: "100%",
                  height: "400px",
                  border: "none",
                  filter: darkMode ? "invert(90%) hue-rotate(180deg)" : "",
                }}
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Zabrze Lompy 35&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
