import React from "react";
import { motion } from "framer-motion";

function Reveal({ children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.95, ease: [0.16, 0.84, 0.24, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;