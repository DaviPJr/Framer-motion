import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const flipControls = useAnimationControls();

  const handleClick = async () => {
    await flipControls.start("flip");
    await flipControls.start("initial");
  };
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0,8rem",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          background: " rgb(86, 1, 245)",
          color: "white",
          fontSize: " 1.8rem",
          borderRadius: "0.4rem",
          border: "none",
          padding: " 0.4rem 0.8rem",
          cursor: "pointer",
        }}
      >
        Flip it!
      </button>
      <motion.div
        style={{
          background: "black",
          width: 150,
          height: 150,
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={flipControls}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
