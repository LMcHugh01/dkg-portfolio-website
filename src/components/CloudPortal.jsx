import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Skills from "./Skills.jsx";
import "../style/CloudPortal.css";

function CloudPortal() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax cloud layers — each moves at a different speed for real depth
  const backY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["-26%", "26%"]);
  const frontY = useTransform(scrollYProgress, [0, 1], ["-48%", "48%"]);

  // The "whiteout" veil — builds to near-opaque right at the midpoint,
  // like passing through the thickest part of the cloud layer, then clears
  const veilOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [0, 0.55, 0.95, 0.55, 0]
  );
  const veilBlurAmount = useTransform(scrollYProgress, [0, 0.5, 1], [0, 22, 0]);
  const veilBlur = useMotionTemplate`blur(${veilBlurAmount}px)`;

  // The tech stack only "arrives" once you've passed through the veil
  const contentOpacity = useTransform(scrollYProgress, [0.42, 0.64], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.42, 0.64], [50, 0]);

  return (
    <div className="cloud-portal" ref={ref}>
      <motion.div className="cloud-layer cloud-layer-back" style={{ y: backY }} />
      <motion.div className="cloud-layer cloud-layer-mid" style={{ y: midY }} />
      <motion.div className="cloud-layer cloud-layer-front" style={{ y: frontY }} />

      <motion.div
        className="cloud-veil"
        style={{ opacity: veilOpacity, filter: veilBlur }}
      />

      <motion.div
        className="cloud-portal-content"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <Skills />
      </motion.div>
    </div>
  );
}

export default CloudPortal;