import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BasicsMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0,8rem",
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
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Show / Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsMotion;
