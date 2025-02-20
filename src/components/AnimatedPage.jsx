import PropTypes from "prop-types";
import { motion } from "motion/react";

const animations = {
	initial: { opacity: 0, x: 100 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -100 },
};

const AnimatedPage = ({ children }) => {
	return (
		<motion.div
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.3 }}>
			{children}
		</motion.div>
	);
};

AnimatedPage.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AnimatedPage;
