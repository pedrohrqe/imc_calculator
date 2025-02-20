import PropTypes from "prop-types";
import styles from "../style/Button.module.css";

const Button = ({ text, action }) => {
	return (
		<button onClick={action} className={styles.button}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired,
};

export default Button;
