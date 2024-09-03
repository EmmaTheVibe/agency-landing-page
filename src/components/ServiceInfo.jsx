import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function ServiceInfo({ item }) {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { threshold: 0.5, once: true });
  return (
    <motion.div
      className="info"
      initial={{ x: -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      ref={divRef}
    >
      <h2>{item.head}</h2>
      <p>{item.text}</p>
      <h3 style={{ "--color": ` ${item.color}` }}>LEARN MORE</h3>
    </motion.div>
  );
}
