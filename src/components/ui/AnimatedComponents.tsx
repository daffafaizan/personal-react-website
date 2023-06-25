import { motion } from "framer-motion";

function AnimatedComponents({ children }) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedComponents;
