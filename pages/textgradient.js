import Article from "../components/article";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Text() {
  const div = useRef();
  useEffect(() => {
    gsap.to(div.current, {
      backgroundImage: "linear-gradient(to left, #30CFD0, #330867)",
      duration: 5,
    });
  }, [div]);
  return (
    <Article title="Text Gradient">
      <div
        ref={div}
        style={{
          display: "inline-block",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <h1>TextGradient</h1>
      </div>
    </Article>
  );
}
