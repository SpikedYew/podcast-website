export default function Kontakt() {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "right",
        width: "100%",
        height: "400px",
      }}
    >
      <div
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
          style={{ width: "100%", height: "400px", border: "none" }}
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Zabrze Lompy 35&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
        />
      </div>
    </div>
  );
}
