import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
  );

  return (
    <motion.div
      style={{
        scaleX,
        background,
        transformOrigin: "left",
        position: "sticky",
        top: 0,
        width: "100%",
        height: "20px",
      }}
    />
  );
};

export default ScrollAnimations;
