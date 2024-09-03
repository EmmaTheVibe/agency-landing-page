import { resources } from "../utils/data";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.2 * index,
    },
  }),
};

export default function Resources({ matches }) {
  return (
    <div className="resources" id="projects">
      {resources.map((resource, index) => (
        <div
          className="resource"
          style={{
            backgroundImage: `url(${
              matches ? resource.mobileBackground : resource.background
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          key={resource.name}
        >
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            className="resource-info"
          >
            <h2 style={{ color: resource.color }}>{resource.name}</h2>
            <p style={{ color: resource.color }}>{resource.info}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
