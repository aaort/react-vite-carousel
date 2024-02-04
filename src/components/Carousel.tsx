import { useEffect, useState } from "react";
import { images } from "../data/images";

function Carousel() {
  const [index, setIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    if (!isPlaying) return;

    const timeoutId = setTimeout(() => {
      if (direction === "forward") {
        if (index < 5) {
          setIndex(index + 1);
        } else {
          setDirection("backward");
        }
      } else {
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setDirection("forward");
        }
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [isPlaying, index, direction]);

  return (
    <div className="container">
      <div className="carousel">
        <div
          className="images-container"
          style={{ position: "relative", left: index * -400 }}
        >
          {images.map((path) => {
            return <img className="carousel-img" key={path} src={path} />;
          })}
        </div>
      </div>

      <div className="actions">
        <button disabled={index === 0} onClick={() => setIndex(index - 1)}>
          Previous
        </button>

        <button disabled={index === 5} onClick={() => setIndex(index + 1)}>
          Next
        </button>

        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Stop" : "Play"}
        </button>
      </div>
    </div>
  );
}

export default Carousel;
