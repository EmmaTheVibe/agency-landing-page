import { testimonials } from "../utils/data";
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
export default function Testimonials() {
  return (
    <div className="testimonials">
      <h2 className="title">CLIENT TESTIMONIALS</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="testimonial"
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            key={testimonial.name}
          >
            <div className="avatar">
              <img src={testimonial.avatar} alt="" />
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <h2>{testimonial.name}</h2>
            <p>{testimonial.position}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
