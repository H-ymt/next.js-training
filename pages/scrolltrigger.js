import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import logo from "../public/react.png";

gsap.registerPlugin(ScrollTrigger);

export default function scrolltrigger() {
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { rotation: 0 },
      {
        rotation: 180,
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ height: "100vh", marginBottom: "32px" }}>スクロールするとロゴが回転する↓</div>
      <Image src={logo} style={{ width: "88px" }} ref={imgRef} />
    </div>
  );
}
