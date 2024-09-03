import { motion } from "framer-motion";
import { Link } from "react-scroll";

const fadeInVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      //   damping: 30,
      //   stiffness: 400,
      duration: 0.2,
    },
  },
};

export default function MobileMenu({ showMenu, setShowMenu }) {
  const closeMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      className="mobile-menu-container"
    >
      <div className="mobile-menu">
        <Link
          onClick={closeMenu}
          to="footer"
          smooth={true}
          offset={-90}
          duration={500}
        >
          <p className="mobile-tab">About</p>
        </Link>
        <Link
          onClick={closeMenu}
          to="services"
          smooth={true}
          offset={-90}
          duration={500}
        >
          <p className="mobile-tab">Services</p>
        </Link>
        <Link
          onClick={closeMenu}
          to="projects"
          smooth={true}
          offset={-90}
          duration={500}
        >
          <p className="mobile-tab">Projects</p>
        </Link>
        <Link
          onClick={closeMenu}
          to="footer"
          smooth={true}
          offset={-90}
          duration={500}
        >
          <p className="mobile-tab" id="contact">
            CONTACT
          </p>
        </Link>
      </div>
    </motion.div>
  );
}
