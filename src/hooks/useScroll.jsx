import { useEffect, useState } from "react";

export function useScroll(ref) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (ref.current) {
      body.addEventListener("scroll", () => {
        if (body.scrollTop >= ref.current?.offsetTop - 400) {
          setPlay(true);
        } else {
          setPlay(false);
        }
      });
      return body.removeEventListener("scroll", () => {
        if (body.scrollTop >= ref.current?.offsetTop - 400) {
          setPlay(true);
        } else {
          setPlay(false);
        }
      });
    }
  }, [ref]);

  return play;
}
