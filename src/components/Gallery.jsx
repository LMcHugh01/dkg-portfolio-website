import React, { useRef, useState } from "react";

function Gallery({ images, mobileImages = [], name, link }) {
  const [view, setView] = useState("desktop");
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbsRef = useRef(null);

  const hasMobile = mobileImages.length > 0;
  const activeImages = view === "mobile" ? mobileImages : images;

  const addressLabel = link
    ? link.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : name;

  const switchView = (nextView) => {
    if (nextView === view) return;
    setView(nextView);
    setActiveIndex(0);
  };

  const scrollThumbs = (direction) => {
    const el = thumbsRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 216, behavior: "smooth" });
  };

  return (
    <div className="project-frame-wrap">
      {hasMobile && (
        <div className="gallery-view-toggle">
          <button
            type="button"
            className={`gallery-view-tab ${view === "desktop" ? "is-active" : ""}`}
            onClick={() => switchView("desktop")}
          >
            Desktop
          </button>
          <button
            type="button"
            className={`gallery-view-tab ${view === "mobile" ? "is-active" : ""}`}
            onClick={() => switchView("mobile")}
          >
            Mobile
          </button>
        </div>
      )}

      {view === "mobile" ? (
        <div className="gallery-phone-frame">
          <div className="gallery-phone-glow"></div>
          <div className="gallery-phone-notch"></div>
          <div className="gallery-phone-screen">
            <img
              src={activeImages[activeIndex]}
              alt={`${name} mobile screenshot ${activeIndex + 1}`}
            />
          </div>
        </div>
      ) : (
        <div className="project-frame">
          <div className="project-frame-glow"></div>
          <div className="project-frame-topbar">
            <div className="frame-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="frame-address">
              <span className="frame-address-dot">●</span>
              {addressLabel}
            </div>
          </div>
          <div className="project-frame-image">
            <img
              src={activeImages[activeIndex]}
              alt={`${name} screenshot ${activeIndex + 1}`}
            />
          </div>
        </div>
      )}

      {activeImages.length > 1 && (
        <div className={`gallery-thumbs-row ${view === "mobile" ? "is-mobile" : ""}`}>
          <button
            type="button"
            className="gallery-arrow gallery-arrow-left"
            onClick={() => scrollThumbs(-1)}
            aria-label="Scroll thumbnails left"
          >
            ‹
          </button>

          <div className="gallery-thumbs" ref={thumbsRef}>
            {activeImages.map((src, index) => (
              <button
                key={index}
                type="button"
                className={`gallery-thumb ${view === "mobile" ? "is-portrait" : ""} ${
                  index === activeIndex ? "is-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View screenshot ${index + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="gallery-arrow gallery-arrow-right"
            onClick={() => scrollThumbs(1)}
            aria-label="Scroll thumbnails right"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;