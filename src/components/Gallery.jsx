import { gallery } from "../utils/data";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2 * index,
    },
  }),
};

export default function Gallery({ matches }) {
  return (
    <div className="gallery">
      {gallery.map((image, index) => (
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          custom={index}
          viewport={{ once: true }}
          className="gallery-item"
          key={image.id}
        >
          <img src={matches ? image.mobileUrl : image.url} alt="" />
        </motion.div>
      ))}
    </div>
  );
}
