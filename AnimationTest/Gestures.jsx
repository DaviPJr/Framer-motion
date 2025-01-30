import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0,8rem",
      }}
    >
      <MotionConfig
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
          rotate: "2.5deg",
        }}
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
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
          Click me
        </motion.button>
        <motion.button
          style={{
            background: " rgb(86, 7, 45)",
            color: "white",
            fontSize: " 1.8rem",
            borderRadius: "0.4rem",
            border: "none",
            padding: " 0.4rem 0.8rem",
            cursor: "pointer",
          }}
        >
          Click me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
