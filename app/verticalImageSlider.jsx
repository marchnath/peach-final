// verticalImageSlider.jsx
"use client";
import { useRef } from "react";

const VerticalImageSlider = ({
  images,
  direction = "normal",
  className = "",
  currentIndex,
  isTransitioning,
  onTransitionEnd,
}) => {
  const slideRef = useRef(null);

  const transitionDuration = 500; // ms
  const fastTransitionDuration = 300; // ms for wrapping transitions

  const getTransitionDuration = (currentIndex, targetIndex) => {
    if (
      (currentIndex === 0 && targetIndex === images.length - 1) ||
      (currentIndex === images.length - 1 && targetIndex === 0)
    ) {
      return fastTransitionDuration;
    }
    return transitionDuration;
  };

  return (
    <div
      ref={slideRef}
      className={`relative h-screen w-1/2 overflow-hidden ${className}`}
    >
      <div
        className="relative h-full w-full"
        style={{
          transition: `transform ${getTransitionDuration(
            currentIndex
          )}ms ease-in-out`,
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              transform: `translateY(${(index - currentIndex) * 100}%)`,
              transition: `transform ${getTransitionDuration(
                currentIndex
              )}ms ease-in-out`,
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={
                direction === "reverse" ? "half-image-right" : "half-image-left"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalImageSlider;

// HomePage.jsx
