import React from "react";

export function Video({ videoSrc }) {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Ey1kzXRK0q0?si=yB98m5GOzl1GXtA9?autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
}
