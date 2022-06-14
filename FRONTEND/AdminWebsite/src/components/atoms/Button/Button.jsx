import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export const Button = ({ name, type, handleOnClick }) => {
	return type ? (
		<button type={type} className={styles.btn} onClick={handleOnClick}>
			{name}
		</button>
	) : (
		<button className={styles.btn} onClick={handleOnClick}>
			{name}
		</button>
	);
};

Button.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	handleOnClick: PropTypes.func,
};
